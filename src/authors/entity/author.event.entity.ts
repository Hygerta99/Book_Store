import {Column, Entity,ManyToOne, PrimaryGeneratedColumn, JoinColumn} from "typeorm";
import {Common} from "../../entity/common";
import { AuthorEntity } from "./author.entity";
import {EventEntity} from "../../events/entity/event.entity";

@Entity("author_event")
export class AuthorEventEntity extends Common {

    @PrimaryGeneratedColumn({
        name: "id",
        type: "int",
    })
    public id: number;

    @Column('int', {
        name: "author_id",
    })
    public author_id: number;

    @Column("int", {
        name: "event_id",
    })
    public event_id: number;

    @ManyToOne(() => AuthorEntity, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'author_id' })
    public author: AuthorEntity;

    @ManyToOne(() => EventEntity,{ onDelete: 'CASCADE' })
    @JoinColumn({ name: 'event_id' })
    public event: EventEntity;

    public toObjectResponse = () => {
        return {
            id: this.id,
            title: this.event.title,
            name: this.author.name,
            nrPeople: this.event.nr_people,
            place: this.event.place
        }
    }

}
