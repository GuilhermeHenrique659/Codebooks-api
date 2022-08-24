import { IHashProvider } from "./IHashProvider";



export class MockHashProvider implements IHashProvider
{
    public async compareHash(password: string, password_hashed: string): Promise<boolean> {
        return password === password_hashed;
    }

    public async generateHash(password: string): Promise<String> {
        return password;
    }
}