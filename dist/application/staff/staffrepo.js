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
class staffRepo {
    staff_data(data) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                yield knex('staff').insert(data)
                    .then((rows) => { resolve(rows); })
                    .catch((error) => { reject(error); });
            });
        });
    }
    staff_list(paginate) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                var r = knex.select('*').from('staff');
                r.paginate(paginate)
                    .then((rows) => { resolve((rows)); })
                    .catch((error) => { reject(error); });
            });
        });
    }
    staff_update(id, data) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                yield knex('staff').where(id).update(data)
                    .then((rows) => { resolve((rows)); })
                    .catch((error) => { reject(error); });
            });
        });
    }
    staff_delete(id) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                yield knex('staff').where(id).del()
                    .then((rows) => { resolve((rows)); })
                    .catch((error) => { reject(error); });
            });
        });
    }
    staff_salt(id) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                yield knex.select('salt', 'email').from('staff').where({ 'staff_id': id }).first()
                    .then((rows) => { resolve((rows)); })
                    .catch((error) => { reject(error); });
            });
        });
    }
    staff_login(data) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                yield knex('staff_login').insert(data)
                    .then((rows) => { resolve((rows)); })
                    .catch((error) => { reject(error); });
            });
        });
    }
}
module.exports = new staffRepo();
