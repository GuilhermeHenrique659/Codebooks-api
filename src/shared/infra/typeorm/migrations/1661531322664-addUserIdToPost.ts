import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class addUserIdToPost1661531322664 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'post',
            new TableColumn({
                name: 'user_id',
                type: 'uuid',
                isNullable: true
            })
        );
        await queryRunner.createForeignKey(
            'post',
            new TableForeignKey({
                name: 'postUsers',
                columnNames: ['user_id'],
                referencedTableName: 'users',
                referencedColumnNames: ['id'],
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('post', 'postUsers');
        await queryRunner.dropColumn('post', 'user_id')
    }

}
