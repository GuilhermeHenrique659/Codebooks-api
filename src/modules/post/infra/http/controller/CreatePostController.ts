import { IController } from "../../../../../shared/factories/controller/IController";
import { IAbstractUseCaseFactory } from "../../../../../shared/factories/useCase/AbstractUseCaseFactory";
import { IHttpRequest, IHttpResponse } from "../../../../../shared/infra/adapter/http/IHttpAdapter";
import { Post } from "../../../domain/entities/Post";


export class CreatePostController implements IController {
    constructor(private _useCaseFactory: IAbstractUseCaseFactory<Post>) { }

    public async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {

        const { title, description } = httpRequest.body;
        const user_id = httpRequest.user.id;

        const createPost = this._useCaseFactory.getCreateUseCase();


        const post = await createPost.execute({
            title: title,
            description: description,
            like: 0,
            user_id: user_id
        });


        return { statusCode: 200, body: post };
    }
}