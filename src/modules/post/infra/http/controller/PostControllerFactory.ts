import { IAbstractControllerFactory } from "../../../../../shared/factories/controller/AbstractControllerFactory";
import { IController } from "../../../../../shared/factories/controller/IController";
import { IAbstractUseCaseFactory } from "../../../../../shared/factories/useCase/AbstractUseCaseFactory";
import { Post } from "../../../domain/entities/Post";
import { postUseCaseFactory } from "../../../domain/useCases/PostUseCaseFactory";
import { CreatePostController } from "./CreatePostController";
import { ListPostController } from "./ListPostController";


export class PostControllerFactory implements IAbstractControllerFactory {
    constructor(private _useCaseFactory: IAbstractUseCaseFactory<Post>) { }

    public getIndexController(): IController {
        return new ListPostController(this._useCaseFactory);
    }

    public getCreateController(): IController {
        return new CreatePostController(this._useCaseFactory);
    }

    public getUpdateController(): IController {
        throw new Error('Not implements');
    }

    public getDeleteController(): IController {
        throw new Error('Not implements');
    }
}


export const postControllerFactory = new PostControllerFactory(postUseCaseFactory);