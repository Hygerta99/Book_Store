import {getRepository} from "typeorm";
import {Request, Response} from "express";
import {EventBookEntity} from "../entity/event.book.entity";

export class EventBookService {
    public static getEventBooks = async (request:Request) => {
        const repository = getRepository(EventBookEntity);

        return await repository.findAndCount({event_id:+request.params.eventId});
    }

    public static insertEventBooks = async (request: Request) => {
        const repository = getRepository(EventBookEntity);
        const eventBook = repository.create({
            event_id:+request.params.eventId,
            ...request.body
        })

        return await repository.save(eventBook);
    }


    public static deleteEventBook = async (request:Request,response:Response)=>{
        const eventId = +request.params.eventId;
        const bookId = +request.params.bookId;
        const repository= getRepository(EventBookEntity);
        return  await repository.delete({event_id:eventId});

    }
}