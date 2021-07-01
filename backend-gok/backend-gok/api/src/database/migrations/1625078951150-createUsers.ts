import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsers1625078951150 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "idUser",
                        type: "number",
                    },
                    {
                        name: "avatar",
                        type: "varchar",
                        isNullable: true, 
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isNullable: true, 
                    },
                    {
                        name: "user",
                        type: "varchar",
                    },
                    {
                        name: "company",
                        type: "varchar",
                        isNullable: true, 
                    },
                    {
                        name: "location",
                        type: "varchar",
                        isNullable: true, 
                    },
                    {
                        name: "star",
                        type: "int",
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
        await queryRunner.dropTable("users")
    }


}
