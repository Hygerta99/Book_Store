import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {AuthorEntity} from "../entity/author.entity";
import {AuthorService} from "../services/author.service";

export class AuthorController {
    public static getAuthors = async (request: Request, response: Response) => {
        try {
            const author = await AuthorService.getAuthors();
            return response.send({ author })
        } catch (e) {
            console.log(e)
            return response.send({ status: 500, message: `Server error`});
        }
    }

    public static insertAuthor = async (request: Request, response: Response) => {
        try {
            const author = await AuthorService.insertAuthor(request);
            return response.status(200).send({ message: 'Success', author });
        } catch (e) {
            console.log(e)
            return response.send({ status: 500, message: `Server error`});
        }
    }

    public static updateAuthor = async (request: Request, response: Response) => {
        const authorId = +request.params.authorId;

        try {
            if (!authorId) {
                return response.send({ status: 400, message: 'authorId is not provided'});
            } else {
                const repository = getRepository(AuthorEntity);
                const user = await repository.findOne({ id: authorId });
                const savedRes = await repository.merge(user, request.body);
                await repository.save(savedRes);
                return response.send({ status: 200, message: `User with id ${authorId} saved successfully`});
            }
        } catch (error) {
            console.log(error)
            return response.send({ status: 500, message: `Server error`});
        }
    }

    public static deleteAuthor = async (request: Request, response: Response) => {
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

    public static updateName = async (request: Request, response: Response) => {
        try {
            const authorId = +request.params.authorId;
            const name = request.body.name;

            if (!authorId) {
                return response.send({ status: 400, message: 'userId is not provided'});
            } else {
                const repository = getRepository(AuthorEntity);
                const author = await repository.findOne({ id: authorId });
                if (!author) {
                    return response.send({ status: 404, message: `User with id ${authorId} not found`});
                } else {
                    author.name = name;
                    await repository.save(author);
                    return response.send({ status: 200, message: `User with id ${authorId} saved successfully`});
                }
            }

        } catch (error) {
            console.log(error)
            return response.send({ status: 500, message: `Server error`});
        }
    }
}
