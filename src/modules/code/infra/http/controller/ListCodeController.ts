import { IController } from "../../../../../shared/infra/adapter/http/IController";
import { IHttpRequest, IHttpResponse } from "../../../../../shared/infra/adapter/http/IHttpAdapter";
import { CodeUseCaseFactory } from "../../../domain/useCases/CodeUseCaseFactory";



export class ListCodeController implements IController {
    constructor(private _useCaseFactory: CodeUseCaseFactory) { }

    public async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
        const { id } = httpRequest.params

        const listCode = this._useCaseFactory.GetListCodeUseCase();

        const codes = await listCode.execute({
            post_id: id
        });

        return { statusCode: 200, body: codes };
    }
}