import { IController } from "../../../../../shared/factories/controller/IController";
import { IAbstractUseCaseFactory } from "../../../../../shared/factories/useCase/AbstractUseCaseFactory";
import { IHttpRequest, IHttpResponse } from "../../../../../shared/infra/adapter/http/IHttpAdapter";
import { Post } from "../../../domain/entities/Post";


export class ListPostController implements IController {
    constructor(private _useCaseFactory: IAbstractUseCaseFactory<Post>) { }

    public async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
        const listPost = this._useCaseFactory.getIndexUseCase();

        const posts = await listPost.execute();

        return { statusCode: 200, body: posts };
    }
}