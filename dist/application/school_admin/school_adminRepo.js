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
class sa_repo {
    sa_data(data) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                yield knex('school_admin').insert(data)
                    .then((rows) => { resolve(rows); })
                    .catch((error) => { reject(error); });
            });
        });
    }
    sa_list(paginate) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                var r = knex.select('*').from('school_admin');
                r.paginate(paginate)
                    .then((rows) => { resolve((rows)); })
                    .catch((error) => { reject(error); });
            });
        });
    }
    sa_update(id, data) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                yield knex('school_admin').where(id).update(data)
                    .then((rows) => { resolve((rows)); })
                    .catch((error) => { reject(error); });
            });
        });
    }
    sa_delete(id) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                yield knex('school_admin').where(id).del()
                    .then((rows) => { resolve((rows)); })
                    .catch((error) => { reject(error); });
            });
        });
    }
    sa_salt(id) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                yield knex.select('salt', 'email').from('school_admin').where({ 'admin_id': id }).first()
                    .then((rows) => { resolve((rows)); })
                    .catch((error) => { reject(error); });
            });
        });
    }
    sa_login(data) {
        return new Promise(function (resolve, reject) {
            return __awaiter(this, void 0, void 0, function* () {
                yield knex('admin_login').insert(data)
                    .then((rows) => { resolve((rows)); })
                    .catch((error) => { reject(error); });
            });
        });
    }
}
module.exports = new sa_repo();
