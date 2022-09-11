import {MigrationInterface, QueryRunner} from "typeorm";

export class addingBook1640617085856 implements MigrationInterface {
    name = 'addingBook1640617085856'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`authors\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`modified_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`name\` varchar(256) NOT NULL, \`surname\` varchar(256) NOT NULL, \`age\` int NULL, \`email\` varchar(256) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`book\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`modified_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`title\` varchar(256) NOT NULL, \`nr_pages\` int NOT NULL, \`genre\` varchar(256) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`book\``);
        await queryRunner.query(`DROP TABLE \`authors\``);
    }

}
