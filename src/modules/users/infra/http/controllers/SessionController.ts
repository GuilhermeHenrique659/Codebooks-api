import { Request, Response } from "express";
import { UserUseCaseFactory } from "../../../domain/useCases/UserUseCaseFactory";



export class SessionController {

    constructor(private _usecases: UserUseCaseFactory) { }

    public async create(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;

        const createSession = this._usecases.getCreateSessionUseCase()

        const token = createSession.execute({ email, password });

        return response.json(token)
    }
}