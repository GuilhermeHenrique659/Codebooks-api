import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";


export class MockUserRepository implements IUserRepository
{
    private usersdb: User[] = []


    public async store(user: User): Promise<void> {
        this.usersdb.push(user);
    }

    public async findByEmail(email: string): Promise<User | null> {
        try {            
            const user = this.usersdb.find(user => user.email === email)
            
            if (user === undefined) return null
            return user;
        } catch {
            return null
        }
    }
}