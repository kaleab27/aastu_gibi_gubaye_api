import {DataSource} from 'typeorm';
import sqlite from '@libsql/sqlite3';
import 'reflect-metadata'
import {envs} from './shared/utils/environment_vars';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  // driver: sqlite,
  // flags: 0x00000040,
  // database: envs.tursoUrl,
  database:'getbigubye.db',
  entities:
    process.env.NODE_ENV === 'production'
      ? ['./dist/models/**/*.js']
      : ['./models/**/*.ts'],
  synchronize: process.env.NODE_ENV === 'production' ? false : true,
});
