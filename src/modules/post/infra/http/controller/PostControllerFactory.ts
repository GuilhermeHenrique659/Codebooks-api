import { postUseCaseFactory, PostUseCaseFactory } from "../../../domain/useCases/PostUseCaseFactory";
import { CreatePostController } from "./CreatePostController";
import { ListPostController } from "./ListPostController";


export class PostControllerFactory {
    constructor(private _useCaseFactory: PostUseCaseFactory) { }

    public getIndex(): ListPostController {
        return new ListPostController(this._useCaseFactory);
    }

    public getCreate(): CreatePostController {
        return new CreatePostController(this._useCaseFactory);
    }
}


export const postControllerFactory = new PostControllerFactory(postUseCaseFactory);