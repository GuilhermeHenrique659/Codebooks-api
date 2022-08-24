import { Secret, sign } from "jsonwebtoken";
import { AuthConfig } from "../../../../config/auth";
import { User } from "../../domain/entities/User";


export function generateToken(user: User): string
{
    return sign({
        "name": user.name
    }, AuthConfig.jwt.secret as Secret, {
        subject: user.id,
        expiresIn: AuthConfig.jwt.expiresIn
    });
    
}