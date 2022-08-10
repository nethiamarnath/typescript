"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const route = require("./routes");
const i18n_1 = __importDefault(require("i18n"));
const path_1 = __importDefault(require("path"));
i18n_1.default.configure({
    locales: ['en', 'de'],
    directory: path_1.default.join(__dirname, 'locales'),
    defaultLocale: 'en',
    header: 'accept-language',
    register: global
});
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
    i18n_1.default.setLocale(req.headers['accept-language']);
    i18n_1.default.init(req, res);
    next();
});
app.use(express_1.default.json());
app.use(route);
app.listen(3000);
exports = app;
