import {MigrationInterface, QueryRunner} from "typeorm";

export class addingAuthorBook1640621832532 implements MigrationInterface {
    name = 'addingAuthorBook1640621832532'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`author_event\` DROP FOREIGN KEY \`FK_702c643a61752d1262115484da6\``);
        await queryRunner.query(`ALTER TABLE \`author_event\` DROP FOREIGN KEY \`FK_7e65e7832417c9495c0dce25b44\``);
        await queryRunner.query(`CREATE TABLE \`author_book\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`modified_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`author_id\` int NOT NULL, \`book_id\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`event_book\` DROP FOREIGN KEY \`FK_e42a8babb7c5d57178e1d52076d\``);
        await queryRunner.query(`ALTER TABLE \`event_book\` DROP FOREIGN KEY \`FK_14ae0dcd6e563eaf3efbb695e8b\``);
        await queryRunner.query(`ALTER TABLE \`event_book\` ADD UNIQUE INDEX \`IDX_e42a8babb7c5d57178e1d52076\` (\`event_id\`)`);
        await queryRunner.query(`ALTER TABLE \`event_book\` ADD UNIQUE INDEX \`IDX_14ae0dcd6e563eaf3efbb695e8\` (\`book_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_e42a8babb7c5d57178e1d52076\` ON \`event_book\` (\`event_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_14ae0dcd6e563eaf3efbb695e8\` ON \`event_book\` (\`book_id\`)`);
        await queryRunner.query(`ALTER TABLE \`author_book\` ADD CONSTRAINT \`FK_12f40a8bac53dadeecab5eb771a\` FOREIGN KEY (\`author_id\`) REFERENCES \`authors\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`author_book\` ADD CONSTRAINT \`FK_0ff619ecdfb79dccf3218494f08\` FOREIGN KEY (\`book_id\`) REFERENCES \`book\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`event_book\` ADD CONSTRAINT \`FK_e42a8babb7c5d57178e1d52076d\` FOREIGN KEY (\`event_id\`) REFERENCES \`event\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`event_book\` ADD CONSTRAINT \`FK_14ae0dcd6e563eaf3efbb695e8b\` FOREIGN KEY (\`book_id\`) REFERENCES \`book\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`author_event\` ADD CONSTRAINT \`FK_7e65e7832417c9495c0dce25b44\` FOREIGN KEY (\`author_id\`) REFERENCES \`authors\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`author_event\` ADD CONSTRAINT \`FK_702c643a61752d1262115484da6\` FOREIGN KEY (\`event_id\`) REFERENCES \`event\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`author_event\` DROP FOREIGN KEY \`FK_702c643a61752d1262115484da6\``);
        await queryRunner.query(`ALTER TABLE \`author_event\` DROP FOREIGN KEY \`FK_7e65e7832417c9495c0dce25b44\``);
        await queryRunner.query(`ALTER TABLE \`event_book\` DROP FOREIGN KEY \`FK_14ae0dcd6e563eaf3efbb695e8b\``);
        await queryRunner.query(`ALTER TABLE \`event_book\` DROP FOREIGN KEY \`FK_e42a8babb7c5d57178e1d52076d\``);
        await queryRunner.query(`ALTER TABLE \`author_book\` DROP FOREIGN KEY \`FK_0ff619ecdfb79dccf3218494f08\``);
        await queryRunner.query(`ALTER TABLE \`author_book\` DROP FOREIGN KEY \`FK_12f40a8bac53dadeecab5eb771a\``);
        await queryRunner.query(`DROP INDEX \`REL_14ae0dcd6e563eaf3efbb695e8\` ON \`event_book\``);
        await queryRunner.query(`DROP INDEX \`REL_e42a8babb7c5d57178e1d52076\` ON \`event_book\``);
        await queryRunner.query(`ALTER TABLE \`event_book\` DROP INDEX \`IDX_14ae0dcd6e563eaf3efbb695e8\``);
        await queryRunner.query(`ALTER TABLE \`event_book\` DROP INDEX \`IDX_e42a8babb7c5d57178e1d52076\``);
        await queryRunner.query(`ALTER TABLE \`event_book\` ADD CONSTRAINT \`FK_14ae0dcd6e563eaf3efbb695e8b\` FOREIGN KEY (\`book_id\`) REFERENCES \`book\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`event_book\` ADD CONSTRAINT \`FK_e42a8babb7c5d57178e1d52076d\` FOREIGN KEY (\`event_id\`) REFERENCES \`event\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`DROP TABLE \`author_book\``);
        await queryRunner.query(`ALTER TABLE \`author_event\` ADD CONSTRAINT \`FK_7e65e7832417c9495c0dce25b44\` FOREIGN KEY (\`author_id\`) REFERENCES \`authors\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`author_event\` ADD CONSTRAINT \`FK_702c643a61752d1262115484da6\` FOREIGN KEY (\`event_id\`) REFERENCES \`event\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
