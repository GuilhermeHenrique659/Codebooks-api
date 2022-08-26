import { DataSource } from 'typeorm'
import { userEntitySchema } from '../../../modules/users/infra/typeorm/entities/UserSchema'
import { CreateUser1661280513221 } from './migrations/1661280513221-CreateUser'
import { CreatePost1661530913093 } from './migrations/1661530913093-CreatePost'
import { addUserIdToPost1661531322664 } from './migrations/1661531322664-addUserIdToPost'

export const connection = new DataSource({
    type: "postgres",
    host: "db",
    port: 5432,
    username: "postgres",
    password: "docker",
    database: "codebooks",
    synchronize: true,
    logging: false,
    migrations: [
        CreateUser1661280513221,
        CreatePost1661530913093,
        addUserIdToPost1661531322664
    ],
    entities: [
        userEntitySchema
    ]
})

