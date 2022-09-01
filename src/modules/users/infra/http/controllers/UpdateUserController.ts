import { IController } from "../../../../../shared/factories/controller/IController";
import { IAbstractUseCaseFactory } from "../../../../../shared/factories/useCase/AbstractUseCaseFactory";
import { IHttpRequest, IHttpResponse } from "../../../../../shared/infra/adapter/http/IHttpAdapter";
import { User } from "../../../domain/entities/User";

export class UpdateUserController implements IController {
    constructor(private _useCaseFactory: IAbstractUseCaseFactory<User>) { }

    public async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
        const { name, email,
            password, passwordToConfirm,
            age, avatar, city, state } = httpRequest.body;
        const { id } = httpRequest.params;

        const updateUser = this._useCaseFactory.getUpdateUseCase();

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