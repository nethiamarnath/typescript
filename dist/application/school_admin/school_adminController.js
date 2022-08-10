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
const sarepo = require("./school_adminRepo");
const encryption = require("../../helper/encrypt_jwt");
class sacontrolller {
    constructor() {
        this.sa_data = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const body = req.body;
                const password = body.password;
                const save = {
                    Role_id: body.Role_id,
                    Name: body.Name,
                    phone_no: body.phone_no,
                    email: body.email,
                    status: body.status,
                    scl_id: body.scl_id
                };
                const hashing = yield encryption.encrypt(password);
                save.password = hashing.password;
                save.salt = hashing.salt;
                const result = yield sarepo.sa_data(save);
                if (!result)
                    res.status(400).send(result);
                else
                    res.status(200).send("data inserted successfuly");
            });
        };
        this.sa_list = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const query = req.query;
                const paginate = {
                    currentPage: query.currentPage,
                    perPage: query.perPage,
                    isLengthAware: true,
                };
                const result = yield sarepo.sa_list(paginate);
                res.send(result);
            });
        };
        this.sa_update = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const param = req.params;
                const body = req.body;
                const id = { admin_id: param.admin_id };
                const data = {
                    Name: body.Name,
                    phone_no: body.phone_no
                };
                yield sarepo.sa_update(id, data);
                res.status(200).send("data updated");
            });
        };
        this.sa_delete = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const param = req.params;
                const id = { admin_id: param.admin_id };
                yield sarepo.sa_delete(id);
                res.status(200).send(" sa deleted");
            });
        };
        this.sa_login = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const body = req.body;
                const auth = {
                    admin_id: body.admin_id,
                    password: body.password
                };
                const salt = yield sarepo.sa_salt(auth.admin_id);
                auth.salt = salt.salt;
                const hashing = yield encryption.encrypt_psrd(auth.password, auth.salt);
                const tokens = yield encryption.login(salt.email);
                tokens.admin_id = auth.admin_id;
                const result = yield sarepo.sa_login(tokens);
                res.send(tokens);
            });
        };
    }
}
module.exports = new sacontrolller();
