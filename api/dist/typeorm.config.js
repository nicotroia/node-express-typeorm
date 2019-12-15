"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Greeting_1 = require("./entity/Greeting");
const typeOrmConfig = {
    type: 'postgres',
    host: process.env.PG_HOST,
    port: parseInt(process.env.PG_PORT || ''),
    username: process.env.PG_USER,
    password: process.env.PG_PASS,
    database: process.env.PG_DATABASE,
    synchronize: false,
    logging: false,
    entities: [
        Greeting_1.Greeting,
    ],
    migrations: [],
    subscribers: []
};
exports.default = typeOrmConfig;
