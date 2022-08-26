import { IHashProvider } from "../../provider/hash/IHashProvider";
import { IUserRepository } from "../repositories/IUserRepository";
import { CreateSessionUseCase } from "./CreateSession/CreateSessionUseCase";
import { CreateUserUseCase } from "./CreateUse/CreateUserCase";


export class UserUseCaseFactory {

    constructor(private _userRepostiory: IUserRepository,
        private _hashProvider: IHashProvider) { }

    public getCreateUserUseCase(): CreateUserUseCase {
        return new CreateUserUseCase(this._userRepostiory);
    }

    public getCreateSessionUseCase(): CreateSessionUseCase {
        return new CreateSessionUseCase(this._userRepostiory, this._hashProvider);
    }
}