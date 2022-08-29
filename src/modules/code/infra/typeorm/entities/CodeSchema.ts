import { EntitySchema } from "typeorm";
import { Code } from "../../../domain/entities/Code";


export const CodeEntitySchema = new EntitySchema<Code>({
    name: 'code',
    columns: {
        id: {
            type: 'uuid',
            primary: true
        },
        code: {
            type: String
        },
        language: {
            type: String
        },
        user_id: {
            type: 'uuid'
        },
        post_id: {
            type: 'uuid'
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
        post: {
            type: 'one-to-many',
            target: 'post',
            joinColumn: {
                name: 'id'
            },
            cascade: true
        },
        user: {
            type: 'one-to-many',
            target: 'users',
            joinColumn: {
                name: 'id'
            },
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        }
    }
});