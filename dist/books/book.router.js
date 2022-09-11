"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRouter = void 0;
var validate_middleware_1 = require("./middlewares/validate.middleware");
var book_controllers_1 = require("./controllers/book.controllers");
var BookRouter = /** @class */ (function () {
    function BookRouter() {
    }
    BookRouter.configRoutes = function (app) {
        app.get('/books', [book_controllers_1.BookController.getBooks]);
        app.post('/book', [validate_middleware_1.ValidateMiddleware.validateInput, book_controllers_1.BookController.insertBook]);
        app.patch('/books/:bookId', [
            validate_middleware_1.ValidateMiddleware.checkForExistence,
        ]);
        app.delete('/books/:bookId', [
            book_controllers_1.BookController.DeleteBook
        ]);
        //
        // app.put('/projects/:projectId', [
        //     ValidateMiddleware.checkForExistence,
        //     ValidateMiddleware.validateInput,
        //     UserController.updateUser
        // ]);
        //
        // app.delete('/projects', [UserController.deleteUser])
    };
    return BookRouter;
}());
exports.BookRouter = BookRouter;
//# sourceMappingURL=book.router.js.map