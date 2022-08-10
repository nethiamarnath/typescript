const config = require('../../config/databaseconfig').development;
const knex = require('knex')(config)
// import { attachPaginate } from 'knex-paginate'
// attachPaginate();

class Staff_rolerepo {
  staff_role_data(data: object) {
    return new Promise(async function (resolve, reject) {
      await knex('staff_role').insert(data)
        .then((rows: any) => { resolve(rows) })
        .catch((error: any) => { reject(error) })
    })
  }

  staff_role_list(paginate: object) {
    return new Promise(async function (resolve, reject) {
      var r = knex.select('*').from('staff_role')
      r.paginate(paginate)
        .then((rows: any) => { resolve((rows)) })
        .catch((error: any) => { reject(error) })
    })
  }


  staff_role_update(id: object, data: object) {
    return new Promise(async function (resolve, reject) {
      await knex('staff_role').where(id).update(data)
        .then((rows: any) => { resolve((rows)) })
        .catch((error: any) => { reject(error) })
    })
  }
  staff_role_delete(id: object) {
    return new Promise(async function (resolve, reject) {
      await knex('staff_role').where(id).del()
        .then((rows: any) => { resolve((rows)) })
        .catch((error: any) => { reject(error) })
    })
  }





}



export = new Staff_rolerepo()