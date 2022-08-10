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
class Staff_classrepo {
    staff_class_data(data) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                yield knex('staff_class').insert(data)
                    .then((rows) => { resolve(rows); })
                    .catch((error) => { reject(error); });
            });
        });
    }
    staff_class_list(paginate) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                var r = knex.select('*').from('staff_class');
                r.paginate(paginate)
                    .then((rows) => { resolve((rows)); })
                    .catch((error) => { reject(error); });
            });
        });
    }
    staff_class_update(id, data) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                yield knex('staff_class').where(id).update(data)
                    .then((rows) => { resolve((rows)); })
                    .catch((error) => { reject(error); });
            });
        });
    }
    staff_class_delete(id) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                yield knex('staff_class').where(id).del()
                    .then((rows) => { resolve((rows)); })
                    .catch((error) => { reject(error); });
            });
        });
    }
}
module.exports = new Staff_classrepo();
