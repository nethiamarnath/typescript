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
const subjectrepo = require("./subject_Repo");
class subject_controlller {
    constructor() {
        this.subject_data = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const body = req.body;
                const data = {
                    subject_name: body.subject_name,
                    scl_id: body.scl_id
                };
                yield subjectrepo.subject_data(data);
                res.status(200).send("data inserted successfuly");
            });
        };
        this.subject_list = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const query = req.query;
                const paginate = {
                    currentPage: query.currentPage,
                    perPage: query.perPage,
                    isLengthAware: true,
                };
                const result = yield subjectrepo.subject_list(paginate);
                res.send(result);
            });
        };
        this.subject_update = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const param = req.params;
                const body = req.body;
                const id = { subj_id: param.subj_id };
                const data = {
                    subject_name: body.subject_name,
                    scl_id: body.scl_id
                };
                yield subjectrepo.subject_update(id, data);
                res.status(200).send("data updated");
            });
        };
        this.subject_delete = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const param = req.params;
                const id = { subj_id: param.subj_id };
                yield subjectrepo.subject_delete(id);
                res.status(200).send("subject deleted");
            });
        };
    }
}
module.exports = new subject_controlller();
