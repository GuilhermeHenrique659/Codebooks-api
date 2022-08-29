import { DataSource } from 'typeorm'
import { CodeEntitySchema } from '../../../modules/code/infra/typeorm/entities/CodeSchema'
import { PostEntitySchema } from '../../../modules/post/infra/typeorm/entites/PostSchema'
import { userEntitySchema } from '../../../modules/users/infra/typeorm/entities/UserSchema'
import { CreateUser1661280513221 } from './migrations/1661280513221-CreateUser'
import { CreatePost1661530913093 } from './migrations/1661530913093-CreatePost'
import { addUserIdToPost1661531322664 } from './migrations/1661531322664-addUserIdToPost'
import { CreateCode1661789200651 } from './migrations/1661789200651-CreateCode'
import { AddPostToCode1661789518704 } from './migrations/1661789518704-AddPostToCode'
import { AddUserToCode1661789848635 } from './migrations/1661789848635-AddUserToCode'

export const connection = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "docker",
    database: "codebooks",
    synchronize: true,
    logging: true,
    migrations: [
        CreateUser1661280513221,
        CreatePost1661530913093,
        addUserIdToPost1661531322664,
        CreateCode1661789200651,
        AddPostToCode1661789518704,
        AddUserToCode1661789848635
    ],
    entities: [
        userEntitySchema,
        PostEntitySchema,
        CodeEntitySchema
    ]
})

