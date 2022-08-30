import { IHttpRequest, IHttpResponse } from "../../../../../shared/infra/adapter/http/IHttpAdapter";
import { PostUseCaseFactory } from "../../../domain/useCases/PostUseCaseFactory";


export class PostController {
    constructor(private _postfactory: PostUseCaseFactory) { }

    public async index(httpRequest: IHttpRequest): Promise<IHttpResponse> {
        const listPost = this._postfactory.GetListPostUseCase();

        const posts = await listPost.execute();

        return { statusCode: 200, body: posts };
    }

    public async create(httpRequest: IHttpRequest): Promise<IHttpResponse> {
        const { title, description } = httpRequest.body;
        const user_id = httpRequest.user.id;

        const createPost = this._postfactory.GetCreatePostUseCase();

        const post = await createPost.execute({
            title: title,
            description: description,
            like: 0,
            user_id: user_id
        });

        return { statusCode: 200, body: post };
    }

}