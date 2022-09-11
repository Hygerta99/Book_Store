import {MigrationInterface, QueryRunner} from "typeorm";

export class addingAuthorEvent1640615092876 implements MigrationInterface {
    name = 'addingAuthorEvent1640615092876'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`author_event\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`modified_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`author_id\` int NOT NULL, \`event_id\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`author_event\``);
    }

}
