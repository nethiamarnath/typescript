import classrepo = require('./classrepo')

class classcontrolller {

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
    await classrepo.class_data(data)
    res.status(200).send("data inserted successfuly")
  }
  class_list = async function (req: any, res: any) {
    const query = req.query
    const paginate = {
      currentPage: query.currentPage,
      perPage: query.perPage,
      isLengthAware: true,
    }
    const result = await classrepo.class_list(paginate)
    res.send(result)
  }
  class_update = async function (req: any, res: any) {
    const param = req.params
    const body = req.body
    const id = { cls_id: param.cls_id }
    const data = {
      cls_name: body.cls_name,
      estb_year: body.estb_year
    }
    await classrepo.class_update(id, data)
    res.status(200).send("data updated")
  }
  class_delete = async function (req: any, res: any) {
    const param = req.params
    const id = { cls_id: param.cls_id }
    await classrepo.class_delete(id)
    res.status(200).send(" class deleted")
  }
}
export = new classcontrolller()