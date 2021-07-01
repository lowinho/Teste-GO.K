import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createSuggestion1625079433757 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "suggestion",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "tag",
                        type: "varchar",
                    },
                    {
                        name: "data_alteracao",
                        type: "timestamp",
                    },
                    {
                        name: "data_cadastro",
                        type: "timestamp",
                    },
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("suggestion")
    }

}
