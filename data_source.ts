import {DataSource} from 'typeorm';
import sqlite from '@libsql/sqlite3';
import {envs} from './shared/utils/environment_vars';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  driver: sqlite,
  flags: 0x00000040,
  database: envs.tursoUrl,
  entities: ['./models/**/*.ts'],
  synchronize: true,
});
