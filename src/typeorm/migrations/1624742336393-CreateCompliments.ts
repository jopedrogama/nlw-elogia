import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCompliments1624742336393 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "compliments",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "user_sender",
                        type: "uuid",
                        isNullable: false
                    },
                    {
                        name: "user_receiver",
                        type: "uuid",
                        isNullable: false
                    },
                    {
                        name: "tag_id",
                        type: "uuid",
                        isNullable: true
                    },
                    {
                        name: "message",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                 ],
                 foreignKeys: [
                     {
                        name: "FKUserSender",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_sender"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                     },
                     {
                        name: "FKUserReciever",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_receiver"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                     },
                     {
                        name: "FKTagId",
                        referencedTableName: "tags",
                        referencedColumnNames: ["id"],
                        columnNames: ["tag_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                     }
                 ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("compliments");
    }

}
