import studentrepo = require('./studentrepo')

class studentcontrolller {

  student_data = async function (req: any, res: any) {
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
    const total: any = await studentrepo.get_no_of_students(data.cls_id)
    const count: any = await studentrepo.get_students_count(data.cls_id)
    if (total.no_of_students >= count.a) {
      const result = await studentrepo.student_data(data)
      res.status(200).send("data inserted successfully")
    }
    else {
      res.status(400).send("the class is full")
    }

  }
  student_list = async function (req: any, res: any) {
    const query = req.query
    const paginate = {
      currentPage: query.currentPage,
      perPage: query.perPage,
      isLengthAware: true,
    }
    const result = await studentrepo.student_list(paginate)
    res.send(result)
  }
  student_update = async function (req: any, res: any) {
    const param = req.params
    const body = req.body
    const id = { std_id: param.std_id }
    const data = {
      std_name: body.std_name,
      dob: body.dob
    }
    await studentrepo.student_update(id, data)
    res.status(200).send("data updated")
  }
  student_delete = async function (req: any, res: any) {
    const param = req.params
    const id = { std_id: param.std_id }
    await studentrepo.student_delete(id)
    res.status(200).send("student deleted")
  }
}
export = new studentcontrolller()