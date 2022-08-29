import { Request, Response } from "express";
import { CreatePostUseCase } from "../../../domain/useCases/CreatePostUseCase/CreatePostUseCase";


export class PostController {
    constructor(private createPost: CreatePostUseCase) { }

    public async create(request: Request, response: Response): Promise<Response> {
        const { title, description } = request.body;
        const user_id = request.user.id;

        const post = await this.createPost.execute({
            title: title,
            description: description,
            like: 0,
            user_id: user_id
        });

        return response.json(post);
    }
}