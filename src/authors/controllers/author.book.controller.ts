import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {AuthorEntity} from "../entity/author.entity";
import {AuthorBookService} from "../services/author.book.service";

export class AuthorBookController {
    public static getAuthorBook = async (request: Request, response: Response) => {
        try {
            const author_books = await AuthorBookService.getAuthorBook(request);
            return response.send({ author_books:  author_books.map(author_book => author_book.toObjectResponse())})
        } catch (e) {
            console.log(e)
            return response.send({ status: 500, message: `Server error`});
        }
    }

    public static insertAuthorBook = async (request: Request, response: Response) => {
        try {
            const user = await AuthorBookService.insertAuthorBook(request);
            return response.status(200).send({ message: 'Success', user });
        } catch (e) {
            console.log(e)
            return response.send({ status: 500, message: `Server error`});
        }
    }

    public static updateAuthorBook = async (request: Request, response: Response) => {
        const authorId = +request.params.authorId;

        try {
            if (!authorId) {
                return response.send({ status: 400, message: 'authorId is not provided'});
            } else {
                const repository = getRepository(AuthorEntity);
                const author = await repository.findOne({ id: authorId });
                const savedRes = await repository.merge(author, request.body);
                await repository.save(savedRes);
                return response.send({ status: 200, message: `User with id ${authorId} saved successfully`});
            }
        } catch (error) {
            console.log(error)
            return response.send({ status: 500, message: `Server error`});
        }
    }

    public static deleteAuthorBook = async (request: Request, response: Response) => {
        try {
            const authorId = +request.params.authorId;
            const repository = getRepository(AuthorEntity);

            await repository.delete({ id: authorId })
            return response.send({ status: 200, message: 'Success'})
        } catch (error) {
            console.log(error)
            return response.send({ status: 500, message: `Server error`});
        }
    }
}
