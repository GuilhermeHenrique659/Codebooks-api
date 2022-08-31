import { IController } from "../../../../../shared/infra/adapter/http/IController";
import { IHttpRequest, IHttpResponse } from "../../../../../shared/infra/adapter/http/IHttpAdapter";
import { UserUseCaseFactory } from "../../../domain/useCases/UserUseCaseFactory";

export class UpdateUserController implements IController {
    constructor(private _useCaseFactory: UserUseCaseFactory) { }

    public async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
        const { name, email,
            password, passwordToConfirm,
            age, avatar, city, state } = httpRequest.body;
        const { id } = httpRequest.params;

        const updateUser = this._useCaseFactory.getUpdateUserUseCase();

        const user = await updateUser.execute({
            name: name,
            email: email,
            password: password,
            age: age,
            avatar: avatar,
            city: city,
            state: state,
            passwordToConfirm: passwordToConfirm,
            id: id
        });

        return { statusCode: 200, body: user }
    }
}