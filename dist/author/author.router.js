"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorRouter = void 0;
var author_controller_1 = require("./controllers/author.controller");
var validate_middleware_1 = require("./middlewares/validate.middleware");
var author_event_controller_1 = require("./controllers/author.event.controller");
var AuthorRouter = /** @class */ (function () {
    function AuthorRouter() {
    }
    AuthorRouter.configRoutes = function (app) {
        app.get('/authors', [author_controller_1.AuthorController.getAuthors]);
        app.post('/authors', [validate_middleware_1.ValidateMiddleware.validateInput, author_controller_1.AuthorController.insertAuthor]);
        app.patch('/authors/:authorId', [
            validate_middleware_1.ValidateMiddleware.checkForExistence,
            validate_middleware_1.ValidateMiddleware.validateNameUpdate,
            author_controller_1.AuthorController.updateName
        ]);
        app.put('/authors/:authorId', [
            validate_middleware_1.ValidateMiddleware.checkForExistence,
            validate_middleware_1.ValidateMiddleware.validateInput,
            author_controller_1.AuthorController.updateAuthor
        ]);
        app.delete('/authors', [author_controller_1.AuthorController.deleteAuthor]);
        // User book routes
        app.get('/authors/:authorId/books', [author_event_controller_1.AuthorEventController.getAuthorEvent]);
        app.post('/authors-book', [author_event_controller_1.AuthorEventController.insertAuthorEvent]);
        app.post('/authors-book', [author_event_controller_1.AuthorEventController.insertAuthorEvent]);
    };
    return AuthorRouter;
}());
exports.AuthorRouter = AuthorRouter;
//# sourceMappingURL=authors.router.js.map