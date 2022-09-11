import {Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Common} from "../../entity/common";
import {EventEntity} from "../../events/entity/event.entity";
import {AuthorEntity} from "../../authors/entity/author.entity";
import {EventBookEntity} from "../../events/entity/event.book.entity";
import {AuthorBookEntity} from "../../authors/entity/author.book.entity";

// tslint:disable:variable-name
@Entity("book")
export class BookEntity extends Common {

    @PrimaryGeneratedColumn({
        name: "id",
        type: "int",
    })
    public id: number;
    @Column("varchar", {
        length: 256,
        name: "title",
        nullable: false,
    })
    public title: string;
    @Column("int", {
        name: "nr_pages",
        nullable: false,
    })
    public nr_pages: number;


    @Column("varchar", {
        length: 256,
        name: "genre",
        nullable: false,
    })
    public genre: string;



}