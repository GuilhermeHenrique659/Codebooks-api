import AppError from "../../../../../shared/errors/AppError";
import { IHashProvider } from "../../../provider/hash/IHashProvider";
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";
import { IUpdateUserUseCaseDTO } from "./UpdateUserUseCaseDTO";


export class UpdateUserUseCase {
    constructor(private _userRespository: IUserRepository,
        private _hashProvider: IHashProvider) { }

    public async execute(data: IUpdateUserUseCaseDTO): Promise<User> {
        const userExists = await this._userRespository.findById(data.id);
        let password: string;

        if (!userExists) throw new AppError('User not found.');

        if (data.email) {
            const EmailExists = await this._userRespository.findByEmail(data.email);

            if (EmailExists) {
                if (EmailExists.email !== userExists.email) throw new AppError('Email already used');
            }
        }
        const passwordConfirm = await this._hashProvider.compareHash(data.passwordToConfirm, userExists.password);

        if (!passwordConfirm) throw new AppError("Password incorrect.", 401);


        if (data.password)
            password = await this._hashProvider.generateHash(data.password);
        else
            password = await this._hashProvider.generateHash(data.passwordToConfirm);

        const user = new User({
            name: data.name,
            email: data.email,
            password: password,
            age: data.age,
            avatar: data.avatar,
            city: data.city,
            state: data.state,
        }, data.id);

        await this._userRespository.store(user);


        return user
    }
}