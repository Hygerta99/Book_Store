import {MigrationInterface, QueryRunner} from "typeorm";

export class addingEventBook1640615818763 implements MigrationInterface {
    name = 'addingEventBook1640615818763'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`event_book\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`modified_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`event_id\` int NOT NULL, \`book_id\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`event_book\``);
    }

}
