import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Common} from "../../entity/common";
import {EventBookEntity} from "./event.book.entity";

// tslint:disable:variable-name
@Entity("event")
export class EventEntity extends Common {

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

    @Column("varchar", {
        name: "place",
        nullable: true,
    })
    public place: string;

    @Column("int", {
        name: "nr_people",
        nullable: true,
    })
    public nr_people: number;

    @OneToMany(() => EventBookEntity,
        (eventBookEntity) => eventBookEntity.event_id)
    public event_books: EventBookEntity[];
}