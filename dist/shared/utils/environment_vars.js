"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envs = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.configDotenv)();
exports.envs = {
    tursoToken: process.env.TURSO_TOKEN,
    tursoEndpoint: process.env.TURSO_ENDPOINT,
    tursoUrl: process.env.TURSO_ENDPOINT + '?authToken=' + process.env.TURSO_TOKEN,
};
//# sourceMappingURL=environment_vars.js.map