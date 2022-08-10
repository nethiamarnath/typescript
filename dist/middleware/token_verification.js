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
const jwt = require("jsonwebtoken");
const configkeys = require("../types/tokenconfig");
const verify_token = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const token = req.headers.access_token;
            let key = configkeys.app.acc_secret;
            const userdata = jwt.verify(token, key);
            const tokendetails = {
                UserId: userdata.UserId,
                access_token: token
            };
            next();
        }
        catch (Error) {
            if (Error.name === "TokenExpiredError") {
                res.status(440).send({ 'message': 'Token access expired' });
            }
            else if (Error.name === "JsonWebTokenError") {
                res.status(441).send({ "Message": 'Invalid access token' });
            }
        }
    });
};
module.exports = verify_token;
