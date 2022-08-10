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
const rolerepo = require("./roles_Repo");
class rolecontrolller {
    constructor() {
        this.role_data = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const body = req.body;
                const data = {
                    role_name: body.role_name,
                };
                yield rolerepo.role_data(data);
                res.status(200).send("data inserted successfuly");
            });
        };
        this.role_list = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const query = req.query;
                const paginate = {
                    currentPage: query.currentPage,
                    perPage: query.perPage,
                    isLengthAware: true,
                };
                const result = yield rolerepo.role_list(paginate);
                res.send(result);
            });
        };
        this.role_update = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const param = req.params;
                const body = req.body;
                const id = { Role_id: param.Role_id };
                const data = {
                    role_name: body.role_name,
                };
                yield rolerepo.role_update(id, data);
                res.status(200).send("data updated");
            });
        };
        this.role_delete = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const param = req.params;
                const id = { Role_id: param.Role_id };
                yield rolerepo.role_delete(id);
                res.status(200).send(" role deleted");
            });
        };
    }
}
module.exports = new rolecontrolller();
