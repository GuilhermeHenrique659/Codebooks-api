import AppError from "../../../../../shared/errors/AppError";
import { IUseCase } from "../../../../../shared/factories/useCase/IUseCase";
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserCaseDTO } from "./CreateUserCaseDTO";


export class CreateUserUseCase implements IUseCase<User>
{
    constructor(private _userRepository: IUserRepository) { }

    public async execute(data: ICreateUserCaseDTO): Promise<User> {
        const emailExists = await this._userRepository.findByEmail(data.email);


        if (emailExists) throw new AppError("Email already exists");

        const user = new User(data);

        await this._userRepository.store(user);

        return user;
    }
}