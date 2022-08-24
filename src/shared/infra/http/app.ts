import express, { NextFunction, Request, Response } from "express"
import "express-async-errors"
import AppError from "../../errors/AppError";
import routes from "./routes";

const app = express();
app.use(express.json());

app.use(routes)

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    const serverStatusError = 500;
    if (error instanceof AppError){
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }
    return response.status(serverStatusError).json({
        status: "error",
        message: "internal server error!"
    })
});

export default app 