import { object } from "joi";

const config = require('../../config/databaseconfig').development;
const knex = require('knex')(config)
// import { attachPaginate } from 'knex-paginate'
// attachPaginate();

class sa_repo {
  sa_data(data: object) {
    return new Promise(async function (resolve, reject) {
      await knex('school_admin').insert(data)
        .then((rows: any) => { resolve(rows) })
        .catch((error: any) => { reject(error)   })
    })
  }

  sa_list(paginate: object) {
    return new Promise(async function (resolve, reject) {
      var r = knex.select('*').from('school_admin')
      r.paginate(paginate)
        .then((rows: any) => { resolve((rows)) })
        .catch((error: any) => { reject(error) })
    })
  }
  sa_update(id: object, data: object) {
    return new Promise(async function (resolve, reject) {
      await knex('school_admin').where(id).update(data)
        .then((rows: any) => { resolve((rows)) })
        .catch((error: any) => { reject(error) })
    })
  }
  sa_delete(id: object) {
    return new Promise(async function (resolve, reject) {
      await knex('school_admin').where(id).del()
        .then((rows: any) => { resolve((rows)) })
        .catch((error: any) => { reject(error) })
    })
  }
  sa_salt(id: number) {

    return new Promise(async function (resolve, reject) {
      await knex.select('salt', 'email').from('school_admin').where({ 'admin_id': id }).first()
        .then((rows: any) => { resolve((rows)) })
        .catch((error: any) => { reject(error) })
    })
  }
  sa_login(data: object) {
    return new Promise(async function (resolve, reject) {
      await knex('admin_login').insert(data)
        .then((rows: any) => { resolve((rows)) })
        .catch((error: any) => { reject(error) })

    })
  }
  
}
export = new sa_repo()