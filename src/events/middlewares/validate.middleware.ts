import {NextFunction, Request, Response} from "express";
import * as Joi from 'joi';
import {getRepository} from "typeorm";
import {EventEntity} from "../entity/event.entity";


export class ValidateMiddleware {
    public static validateInput = (request: Request, response: Response, next: NextFunction) => {
        const schema = Joi.object({
            title: Joi.string().required(),
            place: Joi.string().required(),
            nr_people: Joi.number().required(),
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
            const repository = getRepository(EventEntity);
            const event = await repository.findOne({ id: authorId });

            if (!event) {
                return response.send({ status: 404, message: 'Event not found' });
            } else {
                next();
            }
        } catch (e) {
            return response.send({ status: 500, message: 'Internal Server Error' });
        }
    }

    //public static validateDescriptionUpdate = (request: Request, response: Response, next: NextFunction) => {
    //   const schema = Joi.object({
    //       description: Joi.string().min(5).required(),
    //   });

    //    const result = schema.validate(request.body, { abortEarly: true });

    //    if (typeof result.error === 'undefined') {
    //     next();
    // } else {
    //         return response.send({ status: 400, message: result.error });
    //     }
    // }
    // public static validateProjectTask = (request: Request, response: Response, next: NextFunction) => {
    //     const schema = Joi.object({
    //         task_id: Joi.number().required(),
    //     });
    //
    //     const result = schema.validate(request.body, { abortEarly: true });
    //
    //     if (typeof result.error === 'undefined') {
    //         next();
    //     } else {
    //         return response.send({ status: 400, message: result.error });
    //     }
    //
    // }
}