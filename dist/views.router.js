"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorViewRouter = void 0;
var AuthorViewRouter = /** @class */ (function () {
    function AuthorViewRouter() {
    }
    AuthorViewRouter.configRoutes = function (app) {
        app.get('/', function (req, res) {
            res.render('home', {
                title: 'Book Store',
                team: 'Node.js Group',
            });
        });
        app.get('/authorevent', function (req, res) {
            res.render('authorevent', {
                title: 'Author Events',
                team: 'Node.js Group',
            });
        });
        app.get('/authorbooks', function (req, res) {
            res.render('authorbooks', {
                title: 'Author Books',
                team: 'Node.js Group',
            });
        });
        app.get('/addauthor', function (req, res) {
            res.render('addauthor', {
                team: 'Node.js Group',
            });
        });
        app.get('/authors', function (req, res) {
            res.render('authors', {
                team: 'Node.js Group',
            });
        });
        app.get('*', function (req, res) {
            res.send('Not found');
        });
    };
    return AuthorViewRouter;
}());
exports.AuthorViewRouter = AuthorViewRouter;
//# sourceMappingURL=views.router.js.map