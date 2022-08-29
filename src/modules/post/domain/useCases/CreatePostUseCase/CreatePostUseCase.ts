import AppError from "../../../../../shared/errors/AppError";
import { IUserRepository } from "../../../../users/domain/repositories/IUserRepository";
import { Post } from "../../entities/Post";
import { IPostRepository } from "../../repositories/IPostRepository";
import { ICreatePostUseCase } from "./CreatePostUseCaseDTO";


export class CreatePostUseCase {
    constructor(private postRepository: IPostRepository, private userRepository: IUserRepository) { }

    public async execute(data: ICreatePostUseCase): Promise<Post> {

        const user = await this.userRepository.findById(data.user_id);

        if (!user) throw new AppError('User is not found.');

        const post = new Post({
            title: data.title,
            description: data.description,
            like: data.like,
            user_id: data.user_id
        });


        await this.postRepository.store(post);

        return post
    }
}