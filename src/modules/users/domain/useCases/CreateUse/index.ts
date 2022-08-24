import { UserController } from "../../../infra/http/controllers/UserController";
import { userSchemaRepository } from "../../../infra/typeorm/UserSchemaRepository";
import { UserRepository } from "../../repositories/UserRepository";
import { CreateUserUseCase } from "./CreateUserCase";

const userRepository = new UserRepository(userSchemaRepository);
const createUser = new CreateUserUseCase(userRepository);


export { createUser }

