import {getRepository} from "typeorm";
import {AuthorEntity} from "../entity/author.entity";
import {Request} from "express";

export class AuthorService {
    public static getAuthors = async () => {
        const repository = getRepository(AuthorEntity);
        return await repository.find();
    }

    public static insertAuthor = async (request: Request) => {
        const repository = getRepository(AuthorEntity);
        const author = repository.create({
            ...request.body
        })

        return await repository.save(author);
    }
}
