import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddUserToCode1661789848635 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('code',
            new TableColumn({
                name: 'user_id',
                type: 'uuid'
            })
        );

        await queryRunner.createForeignKey('code',
            new TableForeignKey({
                name: 'codesUser',
                columnNames: ['user_id'],
                referencedTableName: 'users',
                referencedColumnNames: ['id'],
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('code', 'codesUser');
        await queryRunner.dropColumn('code', 'user_id')
    }

}
