import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Common} from "../../entity/common";
import {AuthorEntity} from "./author.entity";
import {BookEntity} from "../../books/entity/book.entity";

@Entity("author_book")
export class AuthorBookEntity extends Common {

    @PrimaryGeneratedColumn({
        name: "id",
        type: "int",
    })
    public id: number;

    @Column("int", {
        name: "author_id",
        nullable: false,
    })
    public author_id: number;

    @Column("int", {
        name: "book_id",
        nullable: false,
    })
    public book_id: number;

    @ManyToOne(() => AuthorEntity, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'author_id' })
    public author: AuthorEntity;

    @ManyToOne(() => BookEntity, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'book_id' })
    public book: BookEntity;

    public toObjectResponse = () => {
        return {
            id: this.id,
            title: this.book.title,
            name: this.author.name,
            nrPages: this.book.nr_pages,
            genre: this.book.genre
        }
    }
}