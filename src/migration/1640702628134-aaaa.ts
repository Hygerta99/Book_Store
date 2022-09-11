import {MigrationInterface, QueryRunner} from "typeorm";

export class aaaa1640702628134 implements MigrationInterface {
    name = 'aaaa1640702628134'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`author_event\` DROP FOREIGN KEY \`FK_702c643a61752d1262115484da6\``);
        await queryRunner.query(`ALTER TABLE \`author_event\` DROP FOREIGN KEY \`FK_7e65e7832417c9495c0dce25b44\``);
        await queryRunner.query(`ALTER TABLE \`author_event\` ADD CONSTRAINT \`FK_7e65e7832417c9495c0dce25b44\` FOREIGN KEY (\`author_id\`) REFERENCES \`authors\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`author_event\` ADD CONSTRAINT \`FK_702c643a61752d1262115484da6\` FOREIGN KEY (\`event_id\`) REFERENCES \`event\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`author_event\` DROP FOREIGN KEY \`FK_702c643a61752d1262115484da6\``);
        await queryRunner.query(`ALTER TABLE \`author_event\` DROP FOREIGN KEY \`FK_7e65e7832417c9495c0dce25b44\``);
        await queryRunner.query(`ALTER TABLE \`author_event\` ADD CONSTRAINT \`FK_7e65e7832417c9495c0dce25b44\` FOREIGN KEY (\`author_id\`) REFERENCES \`authors\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`author_event\` ADD CONSTRAINT \`FK_702c643a61752d1262115484da6\` FOREIGN KEY (\`event_id\`) REFERENCES \`event\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
