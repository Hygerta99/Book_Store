import {getRepository} from "typeorm";
import {AuthorEntity} from "../entity/author.entity";
import {Request} from "express";
import {AuthorEventEntity} from "../entity/author.event.entity";

export class AuthorEventService {
    public static getAuthorEvent = async (request: Request) => {
        const repository = getRepository(AuthorEventEntity);
        return await repository.find({
            relations: ['author', 'event'],
            where: `author_id=${+request.params.authorId}`
        });
    }

    public static insertAuthorEvent = async (request: Request) => {
        const repository = getRepository(AuthorEventEntity);
        const user = repository.create({
            ...request.body
        })

        return await repository.save(user);
    }
}
