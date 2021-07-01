import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTag1625079816588 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tags",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "star_id",
                        type: "uuid",
                        isNullable: true,   
                    },
                    {
                        name: "id_starred",
                        type: "int",
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
        await queryRunner.dropTable("tags")
    }

}
