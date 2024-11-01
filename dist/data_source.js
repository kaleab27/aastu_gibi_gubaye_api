"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
require("reflect-metadata");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'sqlite',
    // driver: sqlite,
    // flags: 0x00000040,
    // database: envs.tursoUrl,
    database: 'getbigubye.db',
    entities: process.env.NODE_ENV === 'production'
        ? ['./dist/models/**/*.js']
        : ['./models/**/*.ts'],
    synchronize: process.env.NODE_ENV === 'production' ? false : true,
});
//# sourceMappingURL=data_source.js.map