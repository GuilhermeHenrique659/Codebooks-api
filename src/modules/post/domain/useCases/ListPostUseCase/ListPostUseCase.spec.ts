import { User } from "../../../../users/domain/entities/User";
import { IUserRepository } from "../../../../users/domain/repositories/IUserRepository";
import { MockUserRepository } from "../../../../users/domain/repositories/mock/MockUserRepository";
import { Post } from "../../entities/Post";
import { IPostRepository } from "../../repositories/IPostRepository";
import { MockPostRepository } from "../../repositories/mock/MockPostRepository";
import { ListPostUseCase } from "./ListPostUseCase";

let listPostUseCase: ListPostUseCase;
let mockPostRepository: IPostRepository;
let mockUserRepository: IUserRepository


describe('Teste Feed Post', () => {
    beforeEach(() => {
        mockPostRepository = new MockPostRepository();
        mockUserRepository = new MockUserRepository();
        listPostUseCase = new ListPostUseCase(mockPostRepository);
    });

    test('should return a list of posts', async () => {
        const user = new User({
            name: 'teste',
            email: 'teste@gmail.com',
            password: '123456'
        })

        await mockUserRepository.store(user);

        await mockPostRepository.store(new Post({
            title: 'teste',
            description: 'teste description',
            like: 10,
            user: user,
            user_id: user.id
        }));

        await mockPostRepository.store(new Post({
            title: 'teste teste',
            description: 'teste description teste',
            like: 100,
            user: user,
            user_id: user.id
        }));

        const list = await listPostUseCase.execute()
        expect(list).toHaveLength(2);
    });
})