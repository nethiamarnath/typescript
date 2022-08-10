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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class Tokengene {
    constructor() { }
    //generating access_token
    generate_Token(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const access_token = jsonwebtoken_1.default.sign({ email }, token_config.app.acc_secret, { expiresIn: token_config.app.acc_exp });
            return access_token;
        });
    }
    generate_Rtoken(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const refresh_token = jsonwebtoken_1.default.sign({ email }, token_config.app.ref_secret, { expiresIn: token_config.app.ref_exp });
            return refresh_token;
        });
    }
    login(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const email = data;
            const access_token = yield this.generate_Token(email);
            const refresh_token = yield this.generate_Rtoken(email);
            return { access_token, refresh_token };
        });
    }
    encrypt(psrd) {
        return __awaiter(this, void 0, void 0, function* () {
            const salt = bcryptjs_1.default.genSaltSync(10);
            const password = yield bcryptjs_1.default.hash(psrd, salt);
            return { password, salt };
        });
    }
    encrypt_psrd(psrd, salt) {
        return __awaiter(this, void 0, void 0, function* () {
            const password = yield bcryptjs_1.default.hash(psrd, salt);
            return { password };
        });
    }
}
module.exports = new Tokengene();
