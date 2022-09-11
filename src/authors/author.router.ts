import * as express from 'express';
import {AuthorController} from "./controllers/author.controller";
import {ValidateMiddleware} from "./middlewares/validate.middleware";
import {AuthorEventController} from "./controllers/author.event.controller";
import {AuthorBookController} from "./controllers/author.book.controller";

export class AuthorRouter {
    public static configRoutes = (app: express.Application): void => {
        app.get('/authors', [AuthorController.getAuthors]);

        app.post('/authors', [ValidateMiddleware.validateInput, AuthorController.insertAuthor]);

        app.patch('/authors/:authorId', [
            ValidateMiddleware.checkForExistence,
            ValidateMiddleware.validateNameUpdate,
            AuthorController.updateName
        ])

        app.put('/authors/:authorId', [
            ValidateMiddleware.checkForExistence,
            ValidateMiddleware.validateInput,
            AuthorController.updateAuthor
        ]);

        app.delete('/authors', [AuthorController.deleteAuthor])

        // Author event routes
        app.get('/author/:authorId/events', [AuthorEventController.getAuthorEvent]
        )
        app.post('/author-event', [AuthorEventController.insertAuthorEvent])

        // Author event routes
        app.get('/author/:authorId/books', [AuthorBookController.getAuthorBook])
        app.post('/author-book', [AuthorBookController.insertAuthorBook])

    }
}
