import { object } from "joi";

const config = require('../../config/databaseconfig').development;
const knex = require('knex')(config)
// import { attachPaginate } from 'knex-paginate'
// attachPaginate();

class staffRepo {
  staff_data(data: object) {
    return new Promise(async function (resolve, reject) {
      await knex('staff').insert(data)
        .then((rows: any) => { resolve(rows) })
        .catch((error: any) => { reject(error) })
    })
  }

  staff_list(paginate: object) {
    return new Promise(async function (resolve, reject) {
      var r = knex.select('*').from('staff')
      r.paginate(paginate)
        .then((rows: any) => { resolve((rows)) })
        .catch((error: any) => { reject(error) })
    })
  }
  staff_update(id: object, data: object) {
    return new Promise(async function (resolve, reject) {
      await knex('staff').where(id).update(data)
        .then((rows: any) => { resolve((rows)) })
        .catch((error: any) => { reject(error) })
    })
  }
  staff_delete(id: object) {
    return new Promise(async function (resolve, reject) {
      await knex('staff').where(id).del()
        .then((rows: any) => { resolve((rows)) })
        .catch((error: any) => { reject(error) })
    })
  }
  staff_salt(id: number) {

    return new Promise(async function (resolve, reject) {
      await knex.select('salt', 'email').from('staff').where({ 'staff_id': id }).first()
        .then((rows: any) => { resolve((rows)) })
        .catch((error: any) => { reject(error) })
    })
  }
  staff_login(data: object) {
    return new Promise(async function (resolve, reject) {
      await knex('staff_login').insert(data)
        .then((rows: any) => { resolve((rows)) })
        .catch((error: any) => { reject(error) })
    })
  }
}
export = new staffRepo()