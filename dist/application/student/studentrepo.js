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
const config = require('../../config/databaseconfig').development;
const knex = require('knex')(config);
// import { attachPaginate } from 'knex-paginate'
// attachPaginate();
class studentrepo {
    student_data(data) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                yield knex(' students').insert(data)
                    .then((rows) => { resolve(rows); })
                    .catch((error) => { reject(error); });
            });
        });
    }
    student_list(paginate) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                var r = knex.select('*').from('students');
                r.paginate(paginate)
                    .then((rows) => { resolve((rows)); })
                    .catch((error) => { reject(error); });
            });
        });
    }
    student_update(id, data) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                yield knex('students').where(id).update(data)
                    .then((rows) => { resolve((rows)); })
                    .catch((error) => { reject(error); });
            });
        });
    }
    student_delete(id) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                yield knex('students').where(id).del()
                    .then((rows) => { resolve((rows)); })
                    .catch((error) => { reject(error); });
            });
        });
    }
    get_no_of_students(data) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                yield knex.select('no_of_students').from('class').where({ cls_id: data }).first()
                    .then((rows) => { resolve(rows); })
                    .catch((error) => { reject(error); });
            });
        });
    }
    get_students_count(data) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                yield knex('students').count('std_id', { as: 'a' }).where({ cls_id: data }).first()
                    .then((rows) => { resolve((rows)); })
                    .catch((error) => { reject(error); });
            });
        });
    }
}
module.exports = new studentrepo();
