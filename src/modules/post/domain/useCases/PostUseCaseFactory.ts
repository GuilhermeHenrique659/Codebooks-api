import { IUserRepository } from "../../../users/domain/repositories/IUserRepository";
import { userRepository } from "../../../users/domain/useCases";
import { postRepositoryOrm } from "../../infra/typeorm/PostRepostiroyOrm";
import { IPostRepository } from "../repositories/IPostRepository";
import { PostRepository } from "../repositories/PostRepository";
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

const postRepository = new PostRepository(postRepositoryOrm);
const postUseCaseFactory = new PostUseCaseFactory(userRepository, postRepository);

export { postUseCaseFactory };
