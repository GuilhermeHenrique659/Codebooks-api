import { Response, Request } from "express";
import { CreateUserUseCase } from "../../../domain/useCases/CreateUse/CreateUserCase";


export class UserController
{
    constructor(private createuser: CreateUserUseCase){}

    public async index(request: Request, response: Response): Promise<Response>
    {
        const { name, email, password} = request.body;
        
        const user = await this.createuser.execute({
            name,
            email,
            password
        });
        
        return response.json(user);
    }
}