import { IAbstractUseCaseFactory } from "../../../../../shared/factories/useCase/AbstractUseCaseFactory";
import { IHttpRequest, IHttpResponse } from "../../../../../shared/infra/adapter/http/IHttpAdapter";
import { User } from "../../../domain/entities/User";


export class CreateUserController {
    constructor(private _useCaseFactory: IAbstractUseCaseFactory<User>) { }

    public async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
        const { name, email, password } = httpRequest.body;

        const createuser = this._useCaseFactory.getCreateUseCase();

        const user = await createuser.execute({
            name,
            email,
            password
        });

        return { statusCode: 200, body: user };
    }
}