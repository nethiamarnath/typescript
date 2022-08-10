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
const staff_classrepo = require("./s_cRepo");
class staff_class_controlller {
    constructor() {
        this.staff_class_data = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const body = req.body;
                const data = {
                    staff_id: body.staff_id,
                    cls_id: body.cls_id,
                    subj_id: body.subj_id,
                    status: body.status
                };
                yield staff_classrepo.staff_class_data(data);
                res.status(200).send("data inserted successfuly");
            });
        };
        this.staff_class_list = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const query = req.query;
                const paginate = {
                    currentPage: query.currentPage,
                    perPage: query.perPage,
                    isLengthAware: true,
                };
                const result = yield staff_classrepo.staff_class_list(paginate);
                res.send(result);
            });
        };
        this.staff_class_update = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const param = req.params;
                const body = req.body;
                const id = { id: param.id };
                const data = {
                    staff_id: body.staff_id,
                    cls_id: body.cls_id,
                    subj_id: body.subj_id
                };
                yield staff_classrepo.staff_class_update(id, data);
                res.status(200).send("data updated");
            });
        };
        this.staff_class_delete = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const param = req.params;
                const id = { id: param.id };
                yield staff_classrepo.staff_class_delete(id);
                res.status(200).send("staff_class deleted");
            });
        };
    }
}
module.exports = new staff_class_controlller();
