import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AuthConfig } from "../../../../config/auth";
import AppError from "../../../errors/AppError";


interface ITokenPayload {
    iat: number;
    exp: number;
    sub: string;
}


export default function isAuthenticated(
    request: Request, response: Response, nextFunction: NextFunction
): void {
    const authHeader = request.headers.authorization;

    if (!authHeader) throw new AppError('token is missing');

    const [, token] = authHeader.split(' ');

    try {
        const decodedToken = verify(token, AuthConfig.jwt.secret);

        const { sub } = decodedToken as ITokenPayload;

        request.user = {
            id: sub,
        }

        return nextFunction();
    } catch {
        throw new AppError('Token JWT is not valid');
    }
}