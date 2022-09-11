import {BeforeUpdate, Column, PrimaryGeneratedColumn} from "typeorm";


// tslint:disable:variable-name
export abstract class Common  {

    @PrimaryGeneratedColumn({
        name: "id",
        type: "int",
    })
    public id: number;

    @Column("timestamp", {
        default: () => "CURRENT_TIMESTAMP",
        name: "created_at",
        nullable: false,
    })
    public created_at: Date;

    @Column("timestamp", {
        default: () => "CURRENT_TIMESTAMP",
        name: "modified_at",
        nullable: false,
    })
    public modified_at: Date;

    @BeforeUpdate()
    public addLastModified() {
        this.modified_at = new Date();
    }
}
