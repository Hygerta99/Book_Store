import {MigrationInterface, QueryRunner} from "typeorm";

export class addingEvents1640615674372 implements MigrationInterface {
    name = 'addingEvents1640615674372'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`event\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`modified_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`title\` varchar(256) NOT NULL, \`place\` varchar(255) NULL, \`nr_people\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`event\``);
    }

}
