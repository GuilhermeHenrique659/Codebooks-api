import { IUseCase } from "../../../../../shared/factories/useCase/IUseCase";
import { Post } from "../../entities/Post";
import { IPostRepository } from "../../repositories/IPostRepository";


export class ListPostUseCase implements IUseCase<Post> {
    constructor(private _postRepository: IPostRepository) { }

    public async execute(): Promise<Post[]> {
        return this._postRepository.findAll();
    }
}