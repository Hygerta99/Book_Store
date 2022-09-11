import "reflect-metadata";
import {createConnection, getRepository} from "typeorm";
const express = require("express");
import * as bodyParser from "body-parser";
import {AuthorRouter} from "./authors/author.router";
import {EventRouter} from "./events/event.router";
import {BookRouter} from "./books/book.router";
import {AuthorService} from "./authors/services/author.service";
import {AuthorViewRouter} from "./views.router";
const path = require('path');
const hbs = require('hbs');

const app = express();


const publicDir = path.join(__dirname, '../public');
const viewsDir = path.join(__dirname, '../templates/views');
const partialsDir = path.join(__dirname, '../templates/partials');

app.use(express.static(publicDir));


app.set('view engine', 'hbs');
app.set('views', viewsDir);
hbs.registerPartials(partialsDir);

app.use(bodyParser.json({limit: "200mb"}));
app.use(bodyParser.urlencoded({limit: "200mb", extended: true}));

createConnection().then(async () => {
    AuthorRouter.configRoutes(app);
    EventRouter.configRoutes(app);
    BookRouter.configRoutes(app);
    AuthorViewRouter.configRoutes(app)
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
        console.log('App listening on port ' + port);
    });



}).catch(error => console.log(error));

