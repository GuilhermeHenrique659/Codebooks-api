import { userUseCaseFactory } from "../../../domain/useCases";
import { UserUseCaseFactory } from "../../../domain/useCases/UserUseCaseFactory";
import { CreateSessionController } from "./SessionController";
import { UpdateUserController } from "./UpdateUserController";
import { CreateUserController } from "./UserController";




export class UserControllerFactory {
    constructor(private _useCaseFactory: UserUseCaseFactory) { }

    public getCreate(): CreateUserController {
        return new CreateUserController(this._useCaseFactory);
    }

    public getUpdate(): UpdateUserController {
        return new UpdateUserController(this._useCaseFactory);
    }

    public getSession(): CreateSessionController {
        return new CreateSessionController(this._useCaseFactory);
    }
}

export const userControllerFactory = new UserControllerFactory(userUseCaseFactory);