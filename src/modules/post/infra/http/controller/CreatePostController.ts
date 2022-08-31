import { IController } from "../../../../../shared/infra/adapter/http/IController";
import { IHttpRequest, IHttpResponse } from "../../../../../shared/infra/adapter/http/IHttpAdapter";
import { PostUseCaseFactory } from "../../../domain/useCases/PostUseCaseFactory";


export class CreatePostController implements IController {
    constructor(private _useCaseFactory: PostUseCaseFactory) { }

    public async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {

        const { title, description } = httpRequest.body;
        const user_id = httpRequest.user.id;

        const createPost = this._useCaseFactory.GetCreatePostUseCase();


        const post = await createPost.execute({
            title: title,
            description: description,
            like: 0,
            user_id: user_id
        });


        return { statusCode: 200, body: post };
    }
}