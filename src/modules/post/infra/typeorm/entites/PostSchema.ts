import { EntitySchema } from "typeorm";
import { Post } from "../../../domain/entities/Post";


export const PostEntitySchema = new EntitySchema<Post>({
    name: 'post',
    columns: {
        id: {
            type: 'uuid',
            primary: true,
        },
        title: {
            type: String
        },
        description: {
            type: String
        },
        like: {
            type: Number
        },
        user_id: {
            type: 'uuid',
        },
        created_at: {
            name: 'created_at',
            type: 'timestamp with time zone',
            createDate: true,
        },
        updated_at: {
            name: 'updated_at',
            type: 'time with time zone',
            updateDate: true,
        }
    },
    relations: {
        user: {
            type: 'one-to-many',
            target: 'users',
            joinColumn: {
                name: 'id'
            },
            cascade: true
        }
    }
});

