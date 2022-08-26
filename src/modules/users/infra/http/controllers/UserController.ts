import { Request, Response } from "express";
import { UserUseCaseFactory } from "../../../domain/useCases/UserUseCaseFactory";


export class UserController {
    constructor(private _userUseCase: UserUseCaseFactory) { }

    public async index(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;

        const createuser = this._userUseCase.getCreateUserUseCase();

        const user = await createuser.execute({
            name,
            email,
            password
        });

        return response.json(user);
    }
}