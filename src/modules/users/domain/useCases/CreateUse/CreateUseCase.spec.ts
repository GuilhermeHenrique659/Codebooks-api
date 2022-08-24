import AppError from "../../../../../shared/errors/AppError";
import { MockUserRepository } from "../../repositories/mock/MockUserRepository"
import { CreateUserUseCase } from "./CreateUserCase"


let createusecase: CreateUserUseCase;
let mockrepository: MockUserRepository;

describe("test CreateUseCase", () => {
    beforeEach( () => {
        mockrepository = new MockUserRepository()
        createusecase = new CreateUserUseCase(mockrepository)
    });

    test("Should return a new user",  async () => {
        const user = await createusecase.execute({
            name: "teste",
            email: "teste@gmail.com",
            password: "1234"
        });
        expect(user).toHaveProperty("id");
    });

    test("Should return a error email already exists", async () => {
        await createusecase.execute({
            name: "teste",
            email: "teste@gmail.com",
            password: "1234"
        });
        await expect(createusecase.execute({
            name: "teste teste",
            email: "teste@gmail.com",
            password: "teste"
        })).rejects.toBeInstanceOf(AppError)
    })
});