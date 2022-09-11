import {getRepository} from "typeorm";
import {Request, Response} from "express";
import {BookEntity} from "../entity/book.entity";
import {boolean} from "joi";

export class BookService {
    public static getBooks = async () => {
        const repository = getRepository(BookEntity);
        return await repository.findAndCount();
    }

    public static insertBook = async (request: Request) => {
        const repository = getRepository(BookEntity);
        const book = repository.create({
            ...request.body
        })

        return await repository.save(book);
    }


    public static deleteBook = async (request:Request,response:Response)=>{
        const bookId = +request.params.bookId;
        const repository= getRepository(BookEntity);
        return  await repository.delete({id:bookId});

    }

}