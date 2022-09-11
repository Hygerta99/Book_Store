import * as express from 'express';
import {ValidateMiddleware} from "./middlewares/validate.middleware";
import {EventController} from "./controllers/event.controller";
import {EventBookController} from "./controllers/event.book.controller";

export class EventRouter {
    public static configRoutes = (app: express.Application): void => {
        app.get('/events', [EventController.getEvents]);

        app.post('/events', [ValidateMiddleware.validateInput, EventController.insertEvent]);

        app.get('/events/:eventId/books',[EventBookController.getEventBooks]);
        app.post('/events/:eventId/book',[EventBookController.insertEventBooks]);
        app.delete('/event/:eventId/book/:book',[EventBookController.deleteEventBook]);
        // app.patch('/projects/:projectId', [
        //     ValidateMiddleware.checkForExistence,
        //     ValidateMiddleware.validateUsernameUpdate,
        //     UserController.updateUsername
        // ])
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