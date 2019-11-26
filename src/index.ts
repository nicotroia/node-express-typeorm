import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Request, Response, NextFunction } from 'express';
import * as express from 'express';
import * as bodyParser from 'body-parser';

import * as HomeController from './controller/HomeController';
import typeOrmConfig from './typeorm.config';

createConnection(typeOrmConfig).then(async connection => {
    const app = express();
    app.use(bodyParser.json());

    app.get('/', HomeController.helloAction);

    app.use((req: Request, res: Response, next: NextFunction) => {
        res.status(404).send('Not found');
    });

    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
        res.status(500).json({ code: 500, message: err.message }).end();
    });

    app.listen(3000);
    console.log('Express application is up and running on port 3000');
}).catch(error => console.log('TypeORM connection error: ', error));
