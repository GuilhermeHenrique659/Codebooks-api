import { connection } from "../typeorm";
import app from "./app";

connection.initialize().then( () => {
    const server = app.listen(3333, () => {
        console.log("Server start in host: http://localhost:3333/");
    })
})