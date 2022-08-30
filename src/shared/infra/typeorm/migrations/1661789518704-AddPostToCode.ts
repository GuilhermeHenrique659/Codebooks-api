import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddPostToCode1661789518704 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('code',
            new TableColumn({
                name: 'post_id',
                type: 'uuid',
                isNullable: false
            })
        );
        await queryRunner.createForeignKey('code',
            new TableForeignKey({
                name: 'codesPost',
                columnNames: ['post_id'],
                referencedTableName: 'post',
                referencedColumnNames: ['id'],
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('code', 'codesPost');
        await queryRunner.dropColumn('code', 'post_id');
    }

}
