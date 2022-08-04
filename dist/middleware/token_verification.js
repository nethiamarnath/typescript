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
const jwt_gene = require("../config/jwt_config");
class token_verification {
    constructor() {
        this.verify_Token = function (st) {
            return __awaiter(this, void 0, void 0, function* () {
                const decode = jsonwebtoken_1.default.verify(st, token_config.app.acc_secret);
                return decode;
            });
        };
        this.check_Rtoken = function (data) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const decode = jsonwebtoken_1.default.verify(data.refresh_token, token_config.app.ref_secret);
                    if (decode) {
                        const aToken = yield jwt_gene.generate_Token(decode.email);
                        return aToken;
                    }
                }
                catch (Error) {
                    if (Error.name === 'JsonWebTokenError') {
                        return ({ error: 'invalid token' });
                    }
                    else if (Error.name === "TokenExpiredError") {
                        return ("TokenExpired");
                    }
                    else {
                        console.log("error");
                    }
                }
            });
        };
    }
}
module.exports = new token_verification;
