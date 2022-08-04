"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const token_config = require("../types/tokenconfig");
class config {
    constructor() { }
    //generating access_token
    generate_Token(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const accesstoken = jsonwebtoken_1.default.sign({ email }, token_config.app.acc_secret, { expiresIn: token_config.app.acc_exp });
            return accesstoken;
        });
    }
    generate_Rtoken(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const rtoken = jsonwebtoken_1.default.sign({ email }, token_config.app.ref_secret, { expiresIn: token_config.app.ref_exp });
            return rtoken;
        });
    }
    login(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const email = data.email;
            const token = yield this.generate_Token(email);
            const r_token = yield this.generate_Rtoken(email);
            return { token, r_token, email };
        });
    }
}
module.exports = new config();
