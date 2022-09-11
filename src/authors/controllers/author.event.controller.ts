import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {AuthorEntity} from "../entity/author.entity";
import {AuthorEventService} from "../services/author.event.service";

export class AuthorEventController {
    public static getAuthorEvent = async (request: Request, response: Response) => {
        try {
            const author_events = await AuthorEventService.getAuthorEvent(request);
            return response.send({ author_events:  author_events.map(author_event => author_event.toObjectResponse())})
        } catch (e) {
            console.log(e)
            return response.send({ status: 500, message: `Server error`});
        }
    }

    public static insertAuthorEvent = async (request: Request, response: Response) => {
        try {
            const user = await AuthorEventService.insertAuthorEvent(request);
            return response.status(200).send({ message: 'Success', user });
        } catch (e) {
            console.log(e)
            return response.send({ status: 500, message: `Server error`});
        }
    }

    public static updateAuthorEvent = async (request: Request, response: Response) => {
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

    public static deleteAuthorEvent = async (request: Request, response: Response) => {
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
