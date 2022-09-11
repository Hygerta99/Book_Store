import {NextFunction, Request, Response} from "express";
import * as Joi from 'joi';
import {AuthorEntity} from "../entity/author.entity";
import {getRepository} from "typeorm";

export class ValidateMiddleware {
    public static validateInput = (request: Request, response: Response, next: NextFunction) => {
        const schema = Joi.object({
            name: Joi.string().required(),
            surname: Joi.string().required(),
            age:Joi.number().required(),
            email: Joi.string().email().required(),
        });

        const result = schema.validate(request.body, { abortEarly: true });

        if (typeof result.error === 'undefined') {
            next();
        } else {
            return response.send({ status: 400, message: result.error });
        }
    }

    public static checkForExistence = async (request: Request, response: Response, next: NextFunction) => {
        const authorId = +request.params.id;
        try {
            const repository = getRepository(AuthorEntity);
            const author = await repository.findOne({ id: authorId });

            if (!author) {
                return response.send({ status: 404, message: 'User not found' });
            } else {
                next();
            }
        } catch (e) {
            return response.send({ status: 500, message: 'Internal Server Error' });
        }
    }

    public static validateNameUpdate = (request: Request, response: Response, next: NextFunction) => {
        const schema = Joi.object({
            name: Joi.string().required(),
        });

        const result = schema.validate(request.body, { abortEarly: true });

        if (typeof result.error === 'undefined') {
            next();
        } else {
            return response.send({ status: 400, message: result.error });
        }
    }
}
