import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Common} from "../../entity/common";

// tslint:disable:variable-name
@Entity("authors")
export class AuthorEntity extends Common {

    @PrimaryGeneratedColumn({
        name: "id",
        type: "int",
    })
    public id: number;

    @Column("varchar", {
        length: 256,
        name: "name",
        nullable: false,
    })
    public name: string;

    @Column("varchar", {
        length: 256,
        name: "surname",
        nullable: false,
    })
    public surname: string;


    @Column("int", {
        name: "age",
        nullable: true,
    })
    public age: number;

    @Column("varchar", {
        length: 256,
        name: "email",
        nullable: false,
    })
    public email: string;



}
