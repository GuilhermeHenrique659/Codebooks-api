import { Repository } from 'typeorm';
import { User } from "../entities/User";
import { IUserRepository } from "./IUserRepository";


export class UserRepository implements IUserRepository {
    constructor(private _ormRepository: Repository<User>) { }

    public async findByEmail(email: string): Promise<User | null> {
        return this._ormRepository.findOne({
            where: {
                email: email
            }
        });
    }

    public findById(id: string): Promise<User | null> {
        return this._ormRepository.findOne({
            where: {
                id: id
            }
        });
    }

    public async store(user: User): Promise<void> {
        await this._ormRepository.save(user);
    }
}