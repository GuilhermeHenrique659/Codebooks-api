import { IAbstractUseCaseFactory } from "../../../../shared/factories/useCase/AbstractUseCaseFactory";
import { IUseCase } from "../../../../shared/factories/useCase/IUseCase";
import { IUserRepository } from "../../../users/domain/repositories/IUserRepository";
import { userRepository } from "../../../users/domain/useCases";
import { postRepositoryOrm } from "../../infra/typeorm/PostRepostiroyOrm";
import { Post } from "../entities/Post";
import { IPostRepository } from "../repositories/IPostRepository";
import { PostRepository } from "../repositories/PostRepository";
import { CreatePostUseCase } from "./CreatePostUseCase/CreatePostUseCase";
import { ListPostUseCase } from "./ListPostUseCase/ListPostUseCase";


export class PostUseCaseFactory implements IAbstractUseCaseFactory<Post> {
    constructor(private _userRepository: IUserRepository, private _postRepository: IPostRepository) { }

    public getCreateUseCase(): IUseCase<Post> {
        return new CreatePostUseCase(this._postRepository, this._userRepository);
    }

    public getIndexUseCase(): IUseCase<Post> {
        return new ListPostUseCase(this._postRepository);
    }

    public getDeleteUseCase(): IUseCase<Post> {
        throw new Error('Not implements');
    }

    public getUpdateUseCase(): IUseCase<Post> {
        throw new Error('Not implements');
    }
}

const postRepository = new PostRepository(postRepositoryOrm);
const postUseCaseFactory = new PostUseCaseFactory(userRepository, postRepository);


export { postUseCaseFactory, postRepository };
