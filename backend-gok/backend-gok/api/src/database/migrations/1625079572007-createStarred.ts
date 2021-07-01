import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createStarred1625079572007 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "starred",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "tag_id",
                        type: "uuid",
                        isNullable: true,   
                    },
                    {
                        name: "user_id",
                        type: "int",
                        isNullable: true, 
                    },
                    {
                        name: "star_id",
                        type: "int",
                        isNullable: true, 
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isNullable: true, 
                    },
                    {
                        name: "description",
                        type: "varchar",
                        isNullable: true, 
                    },
                    {
                        name: "url_repo",
                        type: "varchar",
                    },
                    {
                        name: "language",
                        type: "varchar",
                        isNullable: true, 
                    },
                    {
                        name: "repositories",
                        type: "varchar",
                        isNullable: true, 
                    },
                    {
                        name: "qtde_star",
                        type: "int",
                        isNullable: true, 
                    },
                    {
                        name: "day",
                        type: "int",
                        isNullable: true, 
                    },
                    {
                        name: "suggestion_tag",
                        type: "varchar",
                        isNullable: true, 
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
        await queryRunner.dropTable("starred")
    }

}
