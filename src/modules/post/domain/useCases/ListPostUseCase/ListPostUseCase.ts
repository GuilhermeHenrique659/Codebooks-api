import { Post } from "../../entities/Post";
import { IPostRepository } from "../../repositories/IPostRepository";


export class ListPostUseCase {
    constructor(private _postRepository: IPostRepository) { }

    public async execute(): Promise<Post[]> {
        return this._postRepository.findAll();
    }
}