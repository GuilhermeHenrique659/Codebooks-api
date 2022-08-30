import AppError from "../../../../../shared/errors/AppError";
import { Post } from "../../../../post/domain/entities/Post";
import { MockPostRepository } from "../../../../post/domain/repositories/mock/MockPostRepository";
import { User } from "../../../../users/domain/entities/User";
import { MockUserRepository } from "../../../../users/domain/repositories/mock/MockUserRepository";
import { MockCodeRepository } from "../../repositories/mock/MockCodeRepository";
import { CreateCodeUseCase } from "./CreateCodeUseCase";


let mockpostRepository: MockPostRepository;
let mockuseRepository: MockUserRepository;
let mockcodeRepository: MockCodeRepository;
let createcodeUseCase: CreateCodeUseCase;

const user = new User({
    name: 'teste',
    email: 'teste@gmail.com',
    password: '123456'
})

const post = new Post({
    title: 'teste',
    description: 'teste teste',
    like: 10,
    user_id: user.id
})

describe('Test create code use code.', () => {
    beforeAll(() => {
        mockcodeRepository = new MockCodeRepository();
        mockpostRepository = new MockPostRepository();
        mockuseRepository = new MockUserRepository();
        createcodeUseCase = new CreateCodeUseCase(mockcodeRepository, mockuseRepository, mockpostRepository);
    });

    test('Should return a new code', async () => {
        mockuseRepository.store(user)
        mockpostRepository.store(post)
        const code = await createcodeUseCase.execute({
            code: `print('hello word')`,
            language: 'python',
            user_id: user.id,
            post_id: post.id
        });
        expect(code).toHaveProperty('id');
    });

    test('should return a erro because user id is wrong', async () => {
        await expect(createcodeUseCase.execute({
            code: `print('hello word')`,
            language: 'python',
            user_id: 'e3141fewqd123d23',
            post_id: post.id
        })).rejects.toBeInstanceOf(AppError);
    });

    test('should return a erro because post id is wrong', async () => {
        await expect(createcodeUseCase.execute({
            code: `print('hello word')`,
            language: 'python',
            user_id: user.id,
            post_id: 'wdh9821hd1b9'
        })).rejects.toBeInstanceOf(AppError);
    });
})