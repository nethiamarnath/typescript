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
const schoolrepo = require("./schoolrepo");
class studentcontrolller {
    constructor() {
        this.school_data = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const body = req.body;
                const data = {
                    scl_name: body.scl_name,
                    estb_year: body.estb_year,
                    no_of_employees: body.no_of_employees
                };
                yield schoolrepo.school_data(data);
                res.status(200).send("data inserted successfuly");
            });
        };
        this.school_list = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const query = req.query;
                const paginate = {
                    currentPage: query.currentPage,
                    perPage: query.perPage,
                    isLengthAware: true,
                };
                const result = yield schoolrepo.school_list(paginate);
                res.send(result);
            });
        };
        this.school_update = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const param = req.params;
                const body = req.body;
                const id = { scl_id: param.scl_id };
                const data = {
                    scl_name: body.scl_name,
                    estb_year: body.estb_year
                };
                yield schoolrepo.school_update(id, data);
                res.status(200).send("data updated");
            });
        };
        this.school_delete = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const param = req.params;
                const id = { scl_id: param.scl_id };
                yield schoolrepo.school_delete(id);
                res.status(200).send("school deleted");
            });
        };
    }
}
module.exports = new studentcontrolller();
