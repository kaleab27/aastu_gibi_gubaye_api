"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const sqlite3_1 = __importDefault(require("@libsql/sqlite3"));
const environment_vars_1 = require("./shared/utils/environment_vars");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'sqlite',
    driver: sqlite3_1.default,
    flags: 0x00000040,
    database: environment_vars_1.envs.tursoUrl,
    entities: process.env.NODE_ENV === 'production'
        ? ['./dist/models/**/*.js']
        : ['./models/**/*.ts'],
    synchronize: process.env.NODE_ENV === 'production' ? false : true,
});
//# sourceMappingURL=data_source.js.map