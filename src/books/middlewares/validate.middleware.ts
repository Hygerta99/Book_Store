import {NextFunction, Request, Response} from "express";
import * as Joi from 'joi';
import {getRepository} from "typeorm";
import {BookEntity} from "../entity/book.entity";

export class ValidateMiddleware {
    public static validateInput = (request: Request, response: Response, next: NextFunction) => {
        const schema = Joi.object({
            title: Joi.string().required(),
            genre: Joi.string().required(),
            nr_pages: Joi.number().required(),

        });

        const result = schema.validate(request.body, { abortEarly: true });

        if (typeof result.error === 'undefined') {
            next();
        } else {
            return response.send({ status: 400, message: result.error });
        }
    }

    public static checkForExistence = async (request: Request, response: Response, next: NextFunction) => {
        const bookId = +request.params.bookId;
        try {
            const repository = getRepository(BookEntity);
            const event = await repository.findOne({ id: bookId });

            if (!event) {
                return response.send({ status: 404, message: 'Book not found' });
            } else {
                next();
            }
        } catch (e) {
            return response.send({ status: 500, message: 'Internal Server Error' });
        }
    }


}