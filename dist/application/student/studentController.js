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
const studentrepo = require("./studentrepo");
class studentcontrolller {
    constructor() {
        this.student_data = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const body = req.body;
                const data = {
                    std_name: body.std_name,
                    cls_id: body.cls_id,
                    scl_id: body.scl_id,
                    status: body.status,
                    dob: body.dob
                };
                const total = yield studentrepo.get_no_of_students(data.cls_id);
                const count = yield studentrepo.get_students_count(data.cls_id);
                if (total.no_of_students >= count.a) {
                    const result = yield studentrepo.student_data(data);
                    res.status(200).send("data inserted successfully");
                }
                else {
                    res.status(400).send("the class is full");
                }
            });
        };
        this.student_list = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const query = req.query;
                const paginate = {
                    currentPage: query.currentPage,
                    perPage: query.perPage,
                    isLengthAware: true,
                };
                const result = yield studentrepo.student_list(paginate);
                res.send(result);
            });
        };
        this.student_update = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const param = req.params;
                const body = req.body;
                const id = { std_id: param.std_id };
                const data = {
                    std_name: body.std_name,
                    dob: body.dob
                };
                yield studentrepo.student_update(id, data);
                res.status(200).send("data updated");
            });
        };
        this.student_delete = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const param = req.params;
                const id = { std_id: param.std_id };
                yield studentrepo.student_delete(id);
                res.status(200).send("student deleted");
            });
        };
    }
}
module.exports = new studentcontrolller();
