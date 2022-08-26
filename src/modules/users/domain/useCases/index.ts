import { userSchemaRepository } from "../../infra/typeorm/UserSchemaRepository";
import { HashProvider } from "../../provider/hash/HashProvider";
import { UserRepository } from "../repositories/UserRepository";
import { UserUseCaseFactory } from "./UserUseCaseFactory";

const userRepository = new UserRepository(userSchemaRepository);
const hahsprovider = new HashProvider();
const userUseCaseFactory = new UserUseCaseFactory(userRepository, hahsprovider);


export { userUseCaseFactory };

