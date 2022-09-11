import * as express from 'express';


export class AuthorViewRouter {
    public static configRoutes = (app: express.Application): void => {

        app.get('/', (req, res) => {
            res.render('home', {
                title: 'Book Store',
                team: 'Node.js Group',

            });
        });

        app.get('/authorevent', (req, res) => {
            res.render('authorevent', {
                title: 'Author Events',
                team: 'Node.js Group',
            });
        });


        app.get('/authorbooks', (req, res) => {
            res.render('authorbooks', {
                title: 'Author Books',
                team: 'Node.js Group',
            });
        });

        app.get('/addauthor' , (req, res) => {
            res.render('addauthor', {
                team: 'Node.js Group',
            });
        });
        app.get('/authors' , (req, res) => {
            res.render('authors', {
                team: 'Node.js Group',
            });
        });

        app.get('*' , (req, res) => {
            res.send('Not found');
        });

    }
}
