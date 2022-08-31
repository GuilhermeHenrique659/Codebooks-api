import { IController } from "../../../../../shared/infra/adapter/http/IController";
import { IHttpRequest, IHttpResponse } from "../../../../../shared/infra/adapter/http/IHttpAdapter";
import { CodeUseCaseFactory } from "../../../domain/useCases/CodeUseCaseFactory";


export class CreateCodeController implements IController {
    constructor(private _useCaseFactory: CodeUseCaseFactory) { }

    public async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
        const { code, language, post_id } = httpRequest.body;
        const user_id = httpRequest.user.id;

        const createCode = this._useCaseFactory.GetCreateCodeUseCase();

        const codeOutput = await createCode.execute({
            code: code,
            language: language,
            user_id: user_id,
            post_id: post_id
        });

        return { statusCode: 200, body: codeOutput };
    }
}