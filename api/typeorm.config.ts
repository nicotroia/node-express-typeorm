import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

import { Greeting } from './src/entity/Greeting';

console.log('RUNNING typeorm config');

const typeOrmConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.PG_HOST,
  port: parseInt(process.env.PG_PORT || ''),
  username: process.env.PG_USER,
  password: process.env.PG_PASS,
  database: process.env.PG_DATABASE,
  synchronize: false,
  logging: false,
  entities: [
    Greeting,
  ],
  migrations: [],
  subscribers: []
};

export default typeOrmConfig;
