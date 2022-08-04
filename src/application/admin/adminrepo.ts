import { object } from "joi";
import { NamespaceBody, ShorthandPropertyAssignment, Token, tokenToString } from "typescript";

const config = require('../../config/databaseconfig').development;
const knex = require('knex')(config)
import { attachPaginate } from 'knex-paginate'
attachPaginate();
class adminrepo {
  school_data(data: object) {
    return new Promise(async function (resolve, reject) {
      await knex('school').insert(data)
        .then((rows: any) => { resolve(rows) })
        .catch((error: any) => { reject(error) })
    })

  }
  class_data(data: object) {
    return new Promise(async function (resolve, reject) {
      await knex('class').insert(data)
        .then((rows: any) => { resolve(rows) })
        .catch((error: any) => { reject(error) })
    })
  }
  students_data(data: object) {
    return new Promise(async function (resolve, reject) {
      await knex('students').insert(data)
        .then((rows: any) => { resolve(rows) })
        .catch((error: any) => { reject(error) })
    })
  }
  exam_data(data: object) {
    return new Promise(async function (resolve, reject) {
      await knex('exam').insert(data)
        .then((rows: any) => { resolve(rows) })
        .catch((error: any) => { reject(error) })
    })
  }
  std_exam_data(data: object) {
    return new Promise(async function (resolve, reject) {
      await knex('std_exam').insert(data)
        .then((rows: any) => { resolve(rows) })
        .catch((error: any) => { reject(error) })
    })
  }
  marks_data(data: object, percentage: number, grade: any, se_id: number) {
    return new Promise(async function (resolve, reject) {
      await knex('std_exam').where('se_id', '=', se_id).update({ 'percentage': percentage, 'grade': grade })
      await knex('marks').insert(data)
        .then((rows: any) => { resolve(rows) })
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
  update_percentage(percentage: number, grade: string, se_id: number) {
    return new Promise(async function (resolve, reject) {
      await knex('std_exam').where('se_id', '=', se_id).update({ 'percentage': percentage, 'grade': grade })
        .then((rows: any) => { resolve((rows)) })
        .catch((error: any) => { reject(error) })
    })
  }
  total_students_data() {
    return new Promise(async function (resolve, reject) {
      await knex('students').select('std_id')
        .then((rows: any) => { resolve((rows)) })
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
  students_update(data: any) {
    return new Promise(async function (resolve, reject) {
      await knex('students').where('std_id', '=', data.std_id).update({ std_name: data.new_name })
        .then((rows: any) => { resolve(rows) })
        .catch((error: any) => { reject(error) })
    })
  }
  students_del(data: object) {
    return new Promise(async function (resolve, reject) {
      await knex('students').where(data).del()
        .then((rows: any) => { resolve(rows) })
        .catch((error: any) => { reject(error) })
    })

  }
  // employeeDetails() {
  //   return new Promise(async function (resolve, reject) {
  //     await knex.select('*').from('employees')
  //       .then((rows: any) => { resolve(rows) })
  //       .catch((error: any) => { reject(error) })
  //   })
  // }
  // employeeLogin(data: { email: string, password: string }) {
  //   return new Promise(async function (resolve, reject) {
  //     await knex.select('*').from('employees').where({ email: data.email, password: data.password }).first()
  //       .then((rows: any) => { resolve(rows) })
  //       .catch((error: any) => { reject(error) });

  //   })

  // }
  // employeesalt(data: any) {
  //   return new Promise(async function (resolve, reject) {
  //     await knex.select('salt_key').from('employees').where({ email: data.email }).first()
  //       .then((rows: any) => { resolve(rows) })
  //       .catch((error: any) => { reject(error) });
  //   })

  // }
  // employeetoken(data: any) {
  //   return new Promise(async function (resolve, reject) {
  //     await knex('access_token').insert({ access_token: data.token, email: data.email, refresh_token: data.r_token })
  //       .then((rows: any) => { resolve(rows) })
  //       .catch((error: any) => { reject(error) })
  //   })
  // }
  // update_acc_token(data: object, new_token: any) {
  //   return new Promise(async function (resolve, reject) {
  //     await knex('access_token').where(data).update({ 'access_token': new_token })
  //       .then((rows: any) => { resolve(rows) })
  //       .catch((error: any) => { reject(error) })
  //   })
  // }
  // update_employee_name(data: any) {
  //   return new Promise(async function (resolve, reject) {
  //     await knex('employees').where({ f_name: data.f_name }).update({ f_name: data.newname })
  //       .then((rows: any) => { resolve(rows) })
  //       .catch((error: any) => { reject(error) })

  //   })
  // }
}
export = new adminrepo()






