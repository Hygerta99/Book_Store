import {getRepository} from "typeorm";
import {AuthorBookEntity} from "../entity/author.book.entity";
import {Request} from "express";


export class AuthorBookService {
    public static getAuthorBook = async (request: Request) => {
        const repository = getRepository(AuthorBookEntity);
        return await repository.find({
            relations: ['author', 'book'],
            where: `author_id=${+request.params.authorId}`
        });
    }

    public static insertAuthorBook = async (request: Request) => {
        const repository = getRepository(AuthorBookEntity);
        const author = repository.create({
            ...request.body
        })

        return await repository.save(author);
    }
}
