import { connection } from "../../../../shared/infra/typeorm";
import { User } from "../../domain/entities/User";
import { userEntitySchema } from "./entities/UserSchema";



export const userSchemaRepository = connection.getRepository<User>(userEntitySchema);