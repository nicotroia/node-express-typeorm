"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const express = require("express");
const bodyParser = require("body-parser");
const HomeController = require("./controller/HomeController");
const typeorm_config_1 = require("./typeorm.config");
// console.log('process.env', process.env);
// console.log('typeOrmConfig', typeOrmConfig);
typeorm_1.createConnection(typeorm_config_1.default).then((connection) => __awaiter(void 0, void 0, void 0, function* () {
    const app = express();
    app.use(bodyParser.json());
    app.get('/', HomeController.helloAction);
    app.use((req, res, next) => {
        res.status(404).send('Not found');
    });
    app.use((err, req, res, next) => {
        res.status(500).json({ code: 500, message: err.message }).end();
    });
    app.listen(process.env.NODE_PORT);
    console.log(`Express application (${process.env.NODE_ENV}) is up and running on port ${process.env.NODE_PORT}`);
})).catch(error => console.log('TypeORM connection error: ', error));
