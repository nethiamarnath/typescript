import adminrepo = require('./adminrepo')
import validation = require('./adminvalidation')
import bcrypt from "bcryptjs"
import token = require('../../config/jwt_config')
import token_verify = require('../../middleware/token_verification')
import { object, string, StringRegexOptions } from 'joi'
import { SymbolDisplayPartKind } from 'typescript'

class adminController {

  school_data = async function (req: any, res: any) {
    const body = req.body
    type types = {
      scl_name: string,
      estb_year: number,
      no_of_employees: number
    }
    const data: types = {
      scl_name: body.scl_name,
      estb_year: body.estb_year,
      no_of_employees: body.no_of_employees
    }
    const flag: boolean = validation.school_data(data)
    if (!flag) {
      res.status(400).send("please check the input data")
    }
    else {
      const result = await adminrepo.school_data(data)
      res.status(200).send("data inserted successfuly")
    }
  }
  class_data = async function (req: any, res: any) {
    const body = req.body
    type types = {
      cls_name: string,
      no_of_students: number
    }
    const data: types = {
      cls_name: body.cls_name,
      no_of_students: body.no_of_students
    }
    const flag: boolean = validation.class_data(data)
    if (!flag) {
      res.status(400).send("please check the input data")
    }
    else {
      const result = await adminrepo.class_data(data)
      res.status(200).send("data inserted successfuly")
    }
  }
  students_data = async function (req: any, res: any) {
    const body = req.body
    type types = {
      std_name: string,
      cls_id: number,
      scl_id: number,
      status: boolean,
      dob: Date
    }
    const data: types = {
      std_name: body.std_name,
      cls_id: body.cls_id,
      scl_id: body.scl_id,
      status: body.status,
      dob: body.dob

    }
    const flag: boolean = validation.students_data(data)
    if (!flag) {
      res.status(400).send("please check the input data")
    }
    else {
      const n: any = await adminrepo.get_no_of_students(data.cls_id)
      const count: any = await adminrepo.get_students_count(data.cls_id)
      if (n.no_of_students >= count.a) {
        const result = await adminrepo.students_data(data)
        res.status(200).send("data inserted successfully")
      }
      else {
        res.status(400).send("the class is full")
      }
    }

  }
  exam_data = async function (req: any, res: any) {
    const body = req.body
    type types = {
      exam_name: string,
      order_by: number,
    }
    const data: types = {
      exam_name: body.exam_name,
      order_by: body.order_by

    }
    const flag: boolean = validation.exam_data(data)
    if (!flag) {
      res.status(400).send("please check the input data")
    }
    else {
      const result = await adminrepo.exam_data(data)
      res.status(200).send("data inserted successfuly")
    }
  }
  std_exam_data = async function (req: any, res: any) {
    const body = req.body
    type types = {
      std_id: number,
      exam_id: number,
      percentage: number,
      grade: string
    }
    const data: types = {
      std_id: body.std_id,
      exam_id: body.exam_id,
      percentage: body.percentage,
      grade: body.grade
    }
    const flag: boolean = validation.std_exam_data(data)
    if (!flag) {
      res.status(400).send("please check the input data")
    }
    else {
      const result = await adminrepo.std_exam_data(data)
      res.status(200).send("data inserted successfuly")
    }
  }
  marks_data = async function (req: any, res: any) {
    const body = req.body
    type types = {
      se_id: number,
      maths: number,
      physics: number,
      chemistry: number,
      english: number,
      french: number
    }
    const data: types = {
      se_id: body.se_id,
      maths: body.maths,
      physics: body.physics,
      chemistry: body.chemistry,
      english: body.english,
      french: body.french
    }
    const flag: boolean = validation.marks_data(data)
    if (!flag) {
      res.status(400).send("please check the input data")
    }
    else {
      const percentage: number = ((data.chemistry + data.english + data.french + data.maths + data.physics) / 600) * 100
      var grade: string
      switch (true) {
        case percentage > 91: return 'A+'; break;
        case percentage < 90 && percentage > 81: grade = 'A'; break;
        case percentage < 80 && percentage > 71: grade = 'B'; break;
        case percentage < 70 && percentage > 61: grade = 'C'; break;
        case percentage < 60: grade = 'fail'; break;
        default: grade = 'Absent'; break;
      }
      const result = await adminrepo.marks_data(data, percentage, grade, data.se_id)
      res.status(200).send("data inserted successfuly")
    }
  }

  student_list = async function (req: any, res: any) {
    const body = req.body
    const paginate = {
      currentPage: body.current_page,
      perPage: body.per_page,
      isLengthAware: true,
    }
    const result = await adminrepo.student_list(paginate)
    res.send(result)
  }
  student_update = async function (req: any, res: any) {
    const body = req.body
    const data = {
      std_id: body.std_id,
      new_name: body.new_name
    }

    try {
      await adminrepo.students_update(data)
      res.status(200).send("Name updated successfully")
    } catch (error) {
      res.status(400).send(error)
    }
  }
  student_del = async function (req: any, res: any) {
    const body = req.body
    const data = {
      std_id: body.std_id
    }
    await adminrepo.students_del(data)
    res.status(200).send("Student removed")

  }
}

//   displayemployeeData = async function (req: any, res: any) {
//     const resultdata = await adminrepo.employeeDetails()
//     res.status(200).send(resultdata);
//   }

//   employeeLogindetails = async function (req: any, res: any) {
//     type credentials = {
//       email: string,
//       password: string
//     }
//     const body = req.body
//     const data: credentials = {
//       email: body.email,
//       password: body.password
//     }
//     const flag: boolean = validation.login_validation(data)
//     const salt: any = await adminrepo.employeesalt(data)
//     data.password = await bcrypt.hash(data.password, salt.salt_key)
//     if (!flag) {
//       res.status(422).send("please check your email and password")
//     }
//     else {
//       const login = await adminrepo.employeeLogin(data)
//       if (!login)
//         res.status(404).send("user does not exist ...pls sign in")
//       else {
//         var result = await token.login(data)
//         const resultdata = await adminrepo.employeetoken(result)
//         res.status(200).send(result)
//       }
//     }
//   }

//   generate_acc_token = async function (req: any, res: any) {
//     const body = req.body

//     const data: object = {
//       refresh_token: body.refresh_token
//     }
//     const new_access = await token_verify.check_Rtoken(data)
//     const result = await adminrepo.update_acc_token(data, new_access)
//     res.status(200).send(new_access)
//   }
//   update_name = async function (req: any, res: any) {
//     const body = req.body
//     const header = req.headers
//     const token: string = header.token
//     const data: object = {
//       f_name: body.f_name,
//       newname: body.newname
//     }
//     try {
//       const verify = await token_verify.verify_Token(token)
//       if (verify) {
//         await adminrepo.update_employee_name(data)
//         res.status(200).send("Name updated Successfully....")
//       }
//     } catch (Error: any) {
//       if (Error.name === 'JsonWebTokenError') {
//         res.status(401).send({ error: 'invalid token' });
//       } else if (Error.name === "TokenExpiredError") {
//         res.status(401).send("TokenExpired")
//       } else {
//         console.log("error")
//       }
//     }
//   }
// }










export = new adminController()