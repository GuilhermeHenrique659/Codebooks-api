import { IUserRepository } from "../../../users/domain/repositories/IUserRepository";
import { IPostRepository } from "../repositories/IPostRepository";
import { CreatePostUseCase } from "./CreatePostUseCase/CreatePostUseCase";
import { ListPostUseCase } from "./ListPostUseCase/ListPostUseCase";


export class PostUseCaseFactory {
    constructor(private _userRepository: IUserRepository, private _postRepository: IPostRepository) { }

    public GetCreatePostUseCase(): CreatePostUseCase {
        return new CreatePostUseCase(this._postRepository, this._userRepository);
    }

    public GetListPostUseCase(): ListPostUseCase {
        return new ListPostUseCase(this._postRepository);
    }
}

