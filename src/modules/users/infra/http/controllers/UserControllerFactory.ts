import { IAbstractControllerFactory } from "../../../../../shared/factories/controller/AbstractControllerFactory";
import { IController } from "../../../../../shared/factories/controller/IController";
import { userUseCaseFactory } from "../../../domain/useCases";
import { UserUseCaseFactory } from "../../../domain/useCases/UserUseCaseFactory";
import { CreateUserController } from "./CreateUserController";
import { CreateSessionController } from "./SessionController";
import { UpdateUserController } from "./UpdateUserController";




export class UserControllerFactory implements IAbstractControllerFactory {
    constructor(private _useCaseFactory: UserUseCaseFactory) { }

    public getCreateController(): IController {
        return new CreateUserController(this._useCaseFactory);
    }

    public getUpdateController(): IController {
        return new UpdateUserController(this._useCaseFactory);
    }

    public getDeleteController(): IController {
        throw new Error('Not implements');
    }

    public getIndexController(): IController {
        throw new Error('Not implements');
    }

    public getSession(): IController {
        return new CreateSessionController(this._useCaseFactory);
    }
}

export const userControllerFactory = new UserControllerFactory(userUseCaseFactory);