import {Request, Response} from "express";
import {BookService} from "../services/book.service";

export class BookController {
    public static getBooks = async (request: Request, response: Response) => {
        try {
            const [books, total] = await BookService.getBooks();
            return response.send({ books, total })
        } catch (e) {
            console.log(e)
            return response.send({ status: 500, message: `Server error`});
        }
    }

    public static insertBook = async (request: Request, response: Response) => {
        try {
            const book = await BookService.insertBook(request);
            return response.status(200).send({ message: 'Success', book });
        } catch (e) {
            console.log(e)
            return response.send({ status: 500, message: `Server error`});
        }
    }


    public static DeleteBook = async (request: Request, response: Response) => {
        try {
            await BookService.deleteBook(request,response);
            return response.send({ status: 204, message: `Book deleted successfully`})
        } catch (e) {
            console.log(e)
            return response.send({ status: 500, message: `Server error`});
        }
    }

}