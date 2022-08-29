import { Request, Response } from "express";
import { PostUseCaseFactory } from "../../../domain/useCases/PostUseCaseFactory";


export class PostController {
    constructor(private _postfactory: PostUseCaseFactory) { }

    public async index(request: Request, response: Response): Promise<Response> {
        const listPost = this._postfactory.GetListPostUseCase();

        const posts = await listPost.execute();

        return response.json(posts);
    }

    public async create(request: Request, response: Response): Promise<Response> {
        const { title, description } = request.body;
        const user_id = request.user.id;

        const createPost = this._postfactory.GetCreatePostUseCase();

        const post = await createPost.execute({
            title: title,
            description: description,
            like: 0,
            user_id: user_id
        });

        return response.json(post);
    }

}