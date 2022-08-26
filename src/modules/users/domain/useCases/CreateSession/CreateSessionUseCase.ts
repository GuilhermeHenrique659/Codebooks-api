import AppError from "../../../../../shared/errors/AppError";
import { generateToken } from "../../../provider/auth/generateToken";
import { IHashProvider } from "../../../provider/hash/IHashProvider";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateSessionUseCaseDTO } from "./CreateSessionUseCaseDTO";


export class CreateSessionUseCase {
    private userRepository: IUserRepository;
    private hashProvider: IHashProvider;

    constructor(repository: IUserRepository, hash: IHashProvider) {
        this.hashProvider = hash;
        this.userRepository = repository;
    }

    public async execute({ email, password }: ICreateSessionUseCaseDTO): Promise<object> {
        const user = await this.userRepository.findByEmail(email);

        if (!user) throw new AppError("Email not found.");

        const passwordConfirm = await this.hashProvider.compareHash(password, user.password);

        if (!passwordConfirm) throw new AppError("Password incorrect.");

        const token = generateToken(user);

        return {
            user: user.id,
            token: token
        }
    }
}