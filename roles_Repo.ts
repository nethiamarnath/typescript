import { object } from "joi";

const config = require('../../config/databaseconfig').development;
const knex = require('knex')(config)
// import { attachPaginate } from 'knex-paginate'
// attachPaginate();

class rolesrepo {
  role_data(data: object) {
    return new Promise(async function (resolve, reject) {
      await knex('roles').insert(data)
        .then((rows: any) => { resolve(rows) })
        .catch((error: any) => { reject(error) })
    })
  }

  role_list(paginate: object) {
    return new Promise(async function (resolve, reject) {
      var r = knex.select('*').from('roles')
      r.paginate(paginate)
        .then((rows: any) => { resolve((rows)) })
        .catch((error: any) => { reject(error) })
    })
  }
  role_update(id: object, data: object) {
    return new Promise(async function (resolve, reject) {
      await knex('roles').where(id).update(data)
        .then((rows: any) => { resolve((rows)) })
        .catch((error: any) => { reject(error) })
    })
  }
  role_delete(id: object) {
    return new Promise(async function (resolve, reject) {
      await knex('roles').where(id).del()
        .then((rows: any) => { resolve((rows)) })
        .catch((error: any) => { reject(error) })
    })
  }
}





export = new rolesrepo()