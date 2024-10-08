import {configDotenv} from 'dotenv';
configDotenv();

export const envs = {
  tursoToken: process.env.TURSO_TOKEN,
  tursoEndpoint: process.env.TURSO_ENDPOINT,
  tursoUrl:
    process.env.TURSO_ENDPOINT + '?authToken=' + process.env.TURSO_TOKEN,
};
