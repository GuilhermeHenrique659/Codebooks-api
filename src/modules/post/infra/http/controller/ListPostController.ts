import { IController } from "../../../../../shared/infra/adapter/http/IController";
import { IHttpRequest, IHttpResponse } from "../../../../../shared/infra/adapter/http/IHttpAdapter";
import { PostUseCaseFactory } from "../../../domain/useCases/PostUseCaseFactory";


export class ListPostController implements IController {
    constructor(private _useCaseFactory: PostUseCaseFactory) { }

    public async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
        const listPost = this._useCaseFactory.GetListPostUseCase();

        const posts = await listPost.execute();

        return { statusCode: 200, body: posts };
    }
}