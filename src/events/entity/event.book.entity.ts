import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Common} from "../../entity/common";
import {EventEntity} from "./event.entity";
import {BookEntity} from "../../books/entity/book.entity";

@Entity("event_book")
export class EventBookEntity extends Common {

    @PrimaryGeneratedColumn({
        name: "id",
        type: "int",
    })
    public id: number;

    @Column("int", {
        name: "event_id",
        nullable: false,
    })
    public event_id: number;

    @Column("int", {
        name: "book_id",
        nullable: false,
    })
    public book_id: number;

    @OneToOne(() => EventEntity, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'event_id' })
    public event: EventEntity;

    @OneToOne(() => BookEntity, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'book_id' })
    public book: BookEntity;
}