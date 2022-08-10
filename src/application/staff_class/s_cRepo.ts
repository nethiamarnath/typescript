const config = require('../../config/databaseconfig').development;
const knex = require('knex')(config)
// import { attachPaginate } from 'knex-paginate'
// attachPaginate();

class Staff_classrepo {
  staff_class_data(data: object) {
    return new Promise(async function (resolve, reject) {
      await knex('staff_class').insert(data)
        .then((rows: any) => { resolve(rows) })
        .catch((error: any) => { reject(error) })
    })
  }

  staff_class_list(paginate: object) {
    return new Promise(async function (resolve, reject) {
      var r = knex.select('*').from('staff_class')
      r.paginate(paginate)
        .then((rows: any) => { resolve((rows)) })
        .catch((error: any) => { reject(error) })
    })
  }


  staff_class_update(id: object, data: object) {
    return new Promise(async function (resolve, reject) {
      await knex('staff_class').where(id).update(data)
        .then((rows: any) => { resolve((rows)) })
        .catch((error: any) => { reject(error) })
    })
  }
  staff_class_delete(id: object) {
    return new Promise(async function (resolve, reject) {
      await knex('staff_class').where(id).del()
        .then((rows: any) => { resolve((rows)) })
        .catch((error: any) => { reject(error) })
    })
  }





}



export = new Staff_classrepo()