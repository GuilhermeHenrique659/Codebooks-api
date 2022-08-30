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
            type: 'many-to-one',
            target: 'post',
            joinColumn: {
                name: 'post_id',
                referencedColumnName: 'id'
            },
            cascade: true
        },
        user: {
            type: 'many-to-one',
            target: 'users',
            joinColumn: {
                name: 'user_id',
                referencedColumnName: 'id'
            },
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        }
    }
});