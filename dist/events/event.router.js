"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventRouter = void 0;
var validate_middleware_1 = require("./middlewares/validate.middleware");
var event_controller_1 = require("./controllers/event.controller");
var event_book_controller_1 = require("./controllers/event.book.controller");
var EventRouter = /** @class */ (function () {
    function EventRouter() {
    }
    EventRouter.configRoutes = function (app) {
        app.get('/events', [event_controller_1.EventController.getEvents]);
        app.post('/events', [validate_middleware_1.ValidateMiddleware.validateInput, event_controller_1.EventController.insertEvent]);
        app.get('/events/:eventId/books', [event_book_controller_1.EventBookController.getEventBooks]);
        app.post('/events/:eventId/book', [event_book_controller_1.EventBookController.insertEventBooks]);
        app.delete('/event/:eventId/book/:book', [event_book_controller_1.EventBookController.deleteEventBook]);
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
    };
    return EventRouter;
}());
exports.EventRouter = EventRouter;
//# sourceMappingURL=event.router.js.map