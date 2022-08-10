const config = require('../../config/databaseconfig').development;
const knex = require('knex')(config)
// import { attachPaginate } from 'knex-paginate'
// attachPaginate();

class Subjectrepo {
  subject_data(data: object) {
    return new Promise(async function (resolve, reject) {
      await knex('subject').insert(data)
        .then((rows: any) => { resolve(rows) })
        .catch((error: any) => { reject(error) })
    })
  }

  subject_list(paginate: object) {
    return new Promise(async function (resolve, reject) {
      var r = knex.select('*').from('subject')
      r.paginate(paginate)
        .then((rows: any) => { resolve((rows)) })
        .catch((error: any) => { reject(error) })
    })
  }


  subject_update(id: object, data: object) {
    return new Promise(async function (resolve, reject) {
      await knex('subject').where(id).update(data)
        .then((rows: any) => { resolve((rows)) })
        .catch((error: any) => { reject(error) })
    })
  }
  subject_delete(id: object) {
    return new Promise(async function (resolve, reject) {
      await knex('subject').where(id).del()
        .then((rows: any) => { resolve((rows)) })
        .catch((error: any) => { reject(error) })
    })
  }





}



export = new Subjectrepo()