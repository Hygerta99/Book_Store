import * as express from 'express';
import {ValidateMiddleware} from "./middlewares/validate.middleware";
import {BookController} from "./controllers/book.controllers";

export class BookRouter {
    public static configRoutes = (app: express.Application): void => {
        app.get('/books', [BookController.getBooks]);
        app.post('/book', [ValidateMiddleware.validateInput, BookController.insertBook]);

        app.patch('/books/:bookId', [
            ValidateMiddleware.checkForExistence,
        ])
        app.delete('/books/:bookId',[
            BookController.DeleteBook
        ])
        //
        // app.put('/projects/:projectId', [
        //     ValidateMiddleware.checkForExistence,
        //     ValidateMiddleware.validateInput,
        //     UserController.updateUser
        // ]);
        //
        // app.delete('/projects', [UserController.deleteUser])
    }
}