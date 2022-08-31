import { IHttpRequest, IHttpResponse } from "../../../../../shared/infra/adapter/http/IHttpAdapter";
import { UserUseCaseFactory } from "../../../domain/useCases/UserUseCaseFactory";



export class CreateSessionController {

    constructor(private _useCaseFactory: UserUseCaseFactory) { }

    public async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
        const { email, password } = httpRequest.body;

        const createSession = this._useCaseFactory.getCreateSessionUseCase()

        const token = await createSession.execute({ email, password });

        return { statusCode: 200, body: token };
    }
}