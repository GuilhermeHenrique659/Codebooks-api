import { DataSource } from 'typeorm'
import { userEntitySchema } from '../../../modules/users/infra/typeorm/entities/UserSchema'
import { CreateUser1661280513221 } from './migrations/1661280513221-CreateUser'

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
        CreateUser1661280513221
    ],
    entities: [
        userEntitySchema
    ]
})

