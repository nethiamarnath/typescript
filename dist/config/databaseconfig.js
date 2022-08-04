"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
module.exports = {
    development: {
        client: process.env.DB_CLIENT,
        connection: {
            host: process.env.DB_HOSTNAME,
            database: process.env.DB_NAME,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            port: process.env.DB_PORT,
            typeCast: function (field, next) {
                if (field.type == 'JSON') {
                    return (JSON.parse(field.string()));
                }
                return next();
            }
        },
        pool: {
            min: process.env.DB_POOL_MIN,
            max: process.env.DB_POOL_MAX,
        },
        migrations: {
            tableName: 'KnexMigrations',
        },
    }
};
