import { IAbstractUseCaseFactory } from "../../../../shared/factories/useCase/AbstractUseCaseFactory";
import { IUseCase } from "../../../../shared/factories/useCase/IUseCase";
import { IHashProvider } from "../../provider/hash/IHashProvider";
import { User } from "../entities/User";
import { IUserRepository } from "../repositories/IUserRepository";
import { CreateSessionUseCase } from "./CreateSession/CreateSessionUseCase";
import { CreateUserUseCase } from "./CreateUse/CreateUserCase";
import { UpdateUserUseCase } from "./UpdateUser/UpdateUserUseCase";


export class UserUseCaseFactory implements IAbstractUseCaseFactory<User> {

    constructor(private _userRepostiory: IUserRepository,
        private _hashProvider: IHashProvider) { }

    public getCreateUseCase(): IUseCase<User> {
        return new CreateUserUseCase(this._userRepostiory);
    }

    public getSession(): IUseCase<User> {
        return new CreateSessionUseCase(this._userRepostiory, this._hashProvider);
    }

    public getUpdateUseCase(): IUseCase<User> {
        return new UpdateUserUseCase(this._userRepostiory, this._hashProvider);
    }

    public getDeleteUseCase(): IUseCase<User> {
        throw new Error('Not implements');
    }

    public getIndexUseCase(): IUseCase<User> {
        throw new Error('Not implements');
    }
}