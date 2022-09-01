import { IController } from "../../../../../shared/factories/controller/IController";
import { IAbstractUseCaseFactory } from "../../../../../shared/factories/useCase/AbstractUseCaseFactory";
import { IHttpRequest, IHttpResponse } from "../../../../../shared/infra/adapter/http/IHttpAdapter";
import { Code } from "../../../domain/entities/Code";


export class CreateCodeController implements IController {
    constructor(private _useCaseFactory: IAbstractUseCaseFactory<Code>) { }

    public async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
        const { code, language, post_id } = httpRequest.body;
        const user_id = httpRequest.user.id;

        const createCode = this._useCaseFactory.getCreateUseCase();

        const codeOutput = await createCode.execute({
            code: code,
            language: language,
            user_id: user_id,
            post_id: post_id
        });

        return { statusCode: 200, body: codeOutput };
    }
}