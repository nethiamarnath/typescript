import { object } from "joi";

const config = require('../../config/databaseconfig').development;
const knex = require('knex')(config)
// import { attachPaginate } from 'knex-paginate'
// attachPaginate();

class Schoolrepo {
  school_data(data: object) {
    return new Promise(async function (resolve, reject) {
      await knex('school').insert(data)
        .then((rows: any) => { resolve(rows) })
        .catch((error: any) => { reject(error) })
    })
  }

  school_list(paginate: object) {
    return new Promise(async function (resolve, reject) {
      var r = knex.select('*').from('school')
      r.paginate(paginate)
        .then((rows: any) => { resolve((rows)) })
        .catch((error: any) => { reject(error) })
    })
  }
  school_update(id: object, data: object) {
    return new Promise(async function (resolve, reject) {
      await knex('school').where(id).update(data)
        .then((rows: any) => { resolve((rows)) })
        .catch((error: any) => { reject(error) })
    })
  }
  school_delete(id: object) {
    return new Promise(async function (resolve, reject) {
      await knex('school').where(id).del()
        .then((rows: any) => { resolve((rows)) })
        .catch((error: any) => { reject(error) })
    })
  }















}





export = new Schoolrepo()