import { object } from "joi";

const config = require('../../config/databaseconfig').development;
const knex = require('knex')(config)
// import { attachPaginate } from 'knex-paginate'
// attachPaginate();

class studentrepo {
  student_data(data: object) {
    return new Promise(async function (resolve, reject) {
      await knex(' students').insert(data)
        .then((rows: any) => { resolve(rows) })
        .catch((error: any) => { reject(error) })
    })
  }

  student_list(paginate: object) {
    return new Promise(async function (resolve, reject) {
      var r = knex.select('*').from('students')
      r.paginate(paginate)
        .then((rows: any) => { resolve((rows)) })
        .catch((error: any) => { reject(error) })
    })
  }
  student_update(id: object, data: object) {
    return new Promise(async function (resolve, reject) {
      await knex('students').where(id).update(data)
        .then((rows: any) => { resolve((rows)) })
        .catch((error: any) => { reject(error) })
    })
  }
  student_delete(id: object) {
    return new Promise(async function (resolve, reject) {
      await knex('students').where(id).del()
        .then((rows: any) => { resolve((rows)) })
        .catch((error: any) => { reject(error) })
    })
  }

  get_no_of_students(data: any) {
    return new Promise(async function (resolve, reject) {
      await knex.select('no_of_students').from('class').where({ cls_id: data }).first()
        .then((rows: any) => { resolve(rows) })
        .catch((error: any) => { reject(error) })
    })
  }
  get_students_count(data: any) {
    return new Promise(async function (resolve, reject) {
      await knex('students').count('std_id', { as: 'a' }).where({ cls_id: data }).first()
        .then((rows: any) => { resolve((rows)) })
        .catch((error: any) => { reject(error) })
    })
  }















}





export = new studentrepo()