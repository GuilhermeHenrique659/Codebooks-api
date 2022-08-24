import { IHashProvider } from "../../../provider/hash/IHashProvider";
import { MockHashProvider } from "../../../provider/hash/MockHashProvider";
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";
import { MockUserRepository } from "../../repositories/mock/MockUserRepository";
import { CreateSessionUseCase } from "./CreateSessionUseCase"


let createSessionUseCase: CreateSessionUseCase;
let userRepository: IUserRepository;
let hashprovider: IHashProvider;


describe("test create session", () => {
    beforeEach( () => {
        userRepository = new MockUserRepository();
        hashprovider = new MockHashProvider();
        createSessionUseCase = new CreateSessionUseCase(userRepository, hashprovider);
    })

    test("should return a token", async () => {
        userRepository.store(new User({
            name: "teste",
            email: "teste@gmail.com",
            password: "123456"
        }));
        const token = await createSessionUseCase.execute({
            email: "teste@gmail.com",
            password: "123456"
        });
        expect(token).toHaveProperty("token");

    } )
})