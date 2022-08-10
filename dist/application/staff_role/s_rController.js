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
const staff_rolerepo = require("./s_rRepo");
class Staff_role_controlller {
    constructor() {
        this.staff_role_data = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const body = req.body;
                const data = {
                    staff_id: body.staff_id,
                    Role_id: body.Role_id
                };
                yield staff_rolerepo.staff_role_data(data);
                res.status(200).send("data inserted successfuly");
            });
        };
        this.staff_role_list = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const query = req.query;
                const paginate = {
                    currentPage: query.currentPage,
                    perPage: query.perPage,
                    isLengthAware: true,
                };
                const result = yield staff_rolerepo.staff_role_list(paginate);
                res.send(result);
            });
        };
        this.staff_role_update = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const param = req.params;
                const body = req.body;
                const id = { id: param.id };
                const data = {
                    staff_id: body.staff_id,
                    Role_id: body.Role_id
                };
                yield staff_rolerepo.staff_role_update(id, data);
                res.status(200).send("data updated");
            });
        };
        this.staff_role_delete = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const param = req.params;
                const id = { id: param.id };
                yield staff_rolerepo.staff_role_delete(id);
                res.status(200).send("staff_role deleted");
            });
        };
    }
}
module.exports = new Staff_role_controlller();
