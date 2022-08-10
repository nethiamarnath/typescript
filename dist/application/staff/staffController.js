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
const staffrepo = require("./staffrepo");
const encryption = require("../../helper/encrypt_jwt");
class staffControlller {
    constructor() {
        this.staff_data = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const body = req.body;
                const password = body.password;
                const save = {
                    scl_id: body.scl_id,
                    f_name: body.f_name,
                    l_name: body.l_name,
                    phone_no: body.phone_no,
                    status: body.status,
                    email: body.email,
                    qualification: body.qualification,
                };
                const hashing = yield encryption.encrypt(password);
                save.password = hashing.password;
                save.salt = hashing.salt;
                const result = yield staffrepo.staff_data(save);
                res.send({ 'Message': res.__('data_inserted') });
            });
        };
        this.staff_list = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const query = req.query;
                const paginate = {
                    currentPage: query.currentPage,
                    perPage: query.perPage,
                    isLengthAware: true,
                };
                const result = yield staffrepo.staff_list(paginate);
                res.send(result);
            });
        };
        this.staff_update = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const param = req.params;
                const body = req.body;
                const id = { staff_id: param.staff_id };
                const data = {
                    email: body.email,
                    phone_no: body.phone_no
                };
                yield staffrepo.staff_update(id, data);
                res.send({ 'Message': res.__('dataUpdated') });
            });
        };
        this.staff_delete = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const param = req.params;
                const id = { staff_id: param.staff_id };
                yield staffrepo.staff_delete(id);
                res.send({ 'Message': res.__('UserDeleted') });
            });
        };
        this.staff_login = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const body = req.body;
                const auth = {
                    staff_id: body.staff_id,
                    password: body.password
                };
                const salt = yield staffrepo.staff_salt(auth.staff_id);
                auth.salt = salt.salt;
                const hashing = yield encryption.encrypt_psrd(auth.password, auth.salt);
                const tokens = yield encryption.login(salt.email);
                tokens.staff_id = auth.staff_id;
                const result = yield staffrepo.staff_login(tokens);
                res.send(tokens);
            });
        };
    }
}
module.exports = new staffControlller();
