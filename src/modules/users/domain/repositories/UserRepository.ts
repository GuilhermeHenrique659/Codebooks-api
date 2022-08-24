import { IUserRepository } from "./IUserRepository";
import { Repository } from 'typeorm'
import { IUser } from "../entities/IUser";
import { User } from "../entities/User";


export class UserRepository implements IUserRepository
{
    constructor(private _ormRepository: Repository<User>){}

    public async findByEmail(email: string): Promise<User | null> {
        const user = await this._ormRepository.findOne({
            where: {
                email: email
            }
        });
        return user;
    }

    public async store(user: User): Promise<void> {
        await this._ormRepository.save(user);
    }
}