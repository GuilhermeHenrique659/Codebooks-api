import { IController } from "../../../../../shared/factories/controller/IController";
import { IAbstractUseCaseFactory } from "../../../../../shared/factories/useCase/AbstractUseCaseFactory";
import { IHttpRequest, IHttpResponse } from "../../../../../shared/infra/adapter/http/IHttpAdapter";
import { Code } from "../../../domain/entities/Code";



export class ListCodeController implements IController {
    constructor(private _useCaseFactory: IAbstractUseCaseFactory<Code>) { }

    public async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
        const { id } = httpRequest.params

        const listCode = this._useCaseFactory.getIndexUseCase();

        const codes = await listCode.execute({
            post_id: id
        });

        return { statusCode: 200, body: codes };
    }
}