import {getRepository} from "typeorm";
import {EventEntity} from "../entity/event.entity";
import {Request} from "express";

export class EventService {
    public static getEvents = async () => {
        const repository = getRepository(EventEntity);
        return await repository.find();
    }

    public static insertEvent = async (request: Request) => {
        const repository = getRepository(EventEntity);
        const event = repository.create({
            ...request.body
        })

        return await repository.save(event);
    }
}