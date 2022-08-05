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
const classrepo = require("./classrepo");
class classcontrolller {
    constructor() {
        this.class_data = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const body = req.body;
                const data = {
                    cls_name: body.cls_name,
                    no_of_students: body.no_of_students
                };
                yield classrepo.class_data(data);
                res.status(200).send("data inserted successfuly");
            });
        };
        this.class_list = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const query = req.query;
                const paginate = {
                    currentPage: query.currentPage,
                    perPage: query.perPage,
                    isLengthAware: true,
                };
                const result = yield classrepo.class_list(paginate);
                res.send(result);
            });
        };
        this.class_update = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const param = req.params;
                const body = req.body;
                const id = { cls_id: param.cls_id };
                const data = {
                    cls_name: body.cls_name,
                    estb_year: body.estb_year
                };
                yield classrepo.class_update(id, data);
                res.status(200).send("data updated");
            });
        };
        this.class_delete = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const param = req.params;
                const id = { cls_id: param.cls_id };
                yield classrepo.class_delete(id);
                res.status(200).send(" class deleted");
            });
        };
    }
}
module.exports = new classcontrolller();
