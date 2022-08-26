import { UserUseCaseFactory } from "../../../domain/useCases/UserUseCaseFactory";



export class SessionController {

    constructor(private _usecases: UserUseCaseFactory) { }

    public async create(request: Request, response: Response): Promise<void> {

    }
}