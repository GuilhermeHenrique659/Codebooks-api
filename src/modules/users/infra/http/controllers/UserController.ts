import { IHttpRequest, IHttpResponse } from "../../../../../shared/infra/adapter/http/IHttpAdapter";
import { UserUseCaseFactory } from "../../../domain/useCases/UserUseCaseFactory";


export class CreateUserController {
    constructor(private _useCaseFactory: UserUseCaseFactory) { }

    public async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
        const { name, email, password } = httpRequest.body;

        const createuser = this._useCaseFactory.getCreateUserUseCase();

        const user = await createuser.execute({
            name,
            email,
            password
        });

        return { statusCode: 200, body: user };
    }
}