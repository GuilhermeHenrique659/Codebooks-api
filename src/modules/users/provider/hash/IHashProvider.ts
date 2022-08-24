

export interface IHashProvider
{
    compareHash(password: string, password_hashed: string): Promise<boolean>;
    generateHash(password: string): Promise<String>;
}