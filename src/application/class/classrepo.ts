import { object } from "joi";

const config = require('../../config/databaseconfig').development;
const knex = require('knex')(config)
// import { attachPaginate } from 'knex-paginate'
// attachPaginate();

class classrepo {
  class_data(data: object) {
    return new Promise(async function (resolve, reject) {
      await knex(' class').insert(data)
        .then((rows: any) => { resolve(rows) })
        .catch((error: any) => { reject(error) })
    })
  }

  class_list(paginate: object) {
    return new Promise(async function (resolve, reject) {
      var r = knex.select('*').from('class')
      r.paginate(paginate)
        .then((rows: any) => { resolve((rows)) })
        .catch((error: any) => { reject(error) })
    })
  }
  class_update(id: object, data: object) {
    return new Promise(async function (resolve, reject) {
      await knex('class').where(id).update(data)
        .then((rows: any) => { resolve((rows)) })
        .catch((error: any) => { reject(error) })
    })
  }
  class_delete(id: object) {
    return new Promise(async function (resolve, reject) {
      await knex('class').where(id).del()
        .then((rows: any) => { resolve((rows)) })
        .catch((error: any) => { reject(error) })
    })
  }















}





export = new classrepo()