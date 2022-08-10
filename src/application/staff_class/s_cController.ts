import staff_classrepo = require('./s_cRepo')

class staff_class_controlller {

  staff_class_data = async function (req: any, res: any) {
    const body = req.body
    const data = {
      staff_id: body.staff_id,
      cls_id: body.cls_id,
      subj_id: body.subj_id,
      status: body.status
    }
    await staff_classrepo.staff_class_data(data)
    res.status(200).send("data inserted successfuly")
  }
  staff_class_list = async function (req: any, res: any) {
    const query = req.query
    const paginate = {
      currentPage: query.currentPage,
      perPage: query.perPage,
      isLengthAware: true,
    }
    const result = await staff_classrepo.staff_class_list(paginate)
    res.send(result)
  }
  staff_class_update = async function (req: any, res: any) {
    const param = req.params
    const body = req.body
    const id = { id: param.id }
    const data = {
      staff_id: body.staff_id,
      cls_id: body.cls_id,
      subj_id: body.subj_id
    }
    await staff_classrepo.staff_class_update(id, data)
    res.status(200).send("data updated")
  }
  staff_class_delete = async function (req: any, res: any) {
    const param = req.params
    const id = { id: param.id }
    await staff_classrepo.staff_class_delete(id)
    res.status(200).send("staff_class deleted")
  }
}
export = new staff_class_controlller()