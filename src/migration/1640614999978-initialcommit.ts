import {MigrationInterface, QueryRunner} from "typeorm";

export class initialcommit1640614999978 implements MigrationInterface {
    name = 'initialcommit1640614999978'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`author\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`modified_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`name\` varchar(256) NOT NULL, \`surname\` varchar(256) NOT NULL, \`age\` int NULL, \`email\` varchar(256) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`author\``);
    }

}
