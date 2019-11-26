import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

import { Greeting } from './entity/Greeting';

const typeOrmConfig: PostgresConnectionOptions = {
    type: 'postgres',
    host: 'postgres',
    port: 5432,
    username: 'postgres',
    password: '',
    database: 'project',
    synchronize: false,
    logging: false,
    entities: [
        Greeting,
    ]
};

export default typeOrmConfig;
