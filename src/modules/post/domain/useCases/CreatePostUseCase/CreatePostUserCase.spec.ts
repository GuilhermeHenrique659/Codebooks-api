import { User } from "../../../../users/domain/entities/User";
import { IUserRepository } from "../../../../users/domain/repositories/IUserRepository";
import { MockUserRepository } from "../../../../users/domain/repositories/mock/MockUserRepository";
import { IPostRepository } from "../../repositories/IPostRepository";
import { MockPostRepository } from "../../repositories/mock/MockPostRepository";
import { CreatePostUseCase } from "./CreatePostUseCase";



let createPostUseCase: CreatePostUseCase;
let mockPostRepository: IPostRepository;
let mockUserRepository: IUserRepository

describe('Test Create Post Use Case.', () => {
    beforeEach(() => {
        mockPostRepository = new MockPostRepository();
        mockUserRepository = new MockUserRepository();
        createPostUseCase = new CreatePostUseCase(mockPostRepository, mockUserRepository);
    });

    test('Should return new post', async () => {
        const user = new User({
            name: 'teste',
            email: 'teste@gmail.com',
            password: '123456'
        })

        await mockUserRepository.store(user);

        const post = await createPostUseCase.execute({
            title: 'teste',
            description: 'teste description',
            like: 0,
            user_id: user.id
        })

        expect(post).toHaveProperty("id");
    });
});