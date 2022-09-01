import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddAvatarInfoInUser1661963650583 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns('users', [
            new TableColumn({
                name: 'avatar',
                type: 'varchar',
                isNullable: true
            }),
            new TableColumn({
                name: 'age',
                type: 'date',
                isNullable: true
            }),
            new TableColumn({
                name: 'city',
                type: 'varchar',
                isNullable: true
            }),
            new TableColumn({
                name: 'state',
                type: 'varchar',
                isNullable: true
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumns('users', [
            'avatar',
            'city',
            'state'
        ]);
    }

}
