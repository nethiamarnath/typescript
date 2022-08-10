import staff_rolerepo = require('./s_rRepo')

class Staff_role_controlller {

  staff_role_data = async function (req: any, res: any) {
    const body = req.body
    const data = {
      staff_id: body.staff_id,
      Role_id: body.Role_id
    }
    await staff_rolerepo.staff_role_data(data)
    res.status(200).send("data inserted successfuly")
  }
  staff_role_list = async function (req: any, res: any) {
    const query = req.query
    const paginate = {
      currentPage: query.currentPage,
      perPage: query.perPage,
      isLengthAware: true,
    }
    const result = await staff_rolerepo.staff_role_list(paginate)
    res.send(result)
  }
  staff_role_update = async function (req: any, res: any) {
    const param = req.params
    const body = req.body
    const id = { id: param.id }
    const data = {
      staff_id: body.staff_id,
      Role_id: body.Role_id
    }
    await staff_rolerepo.staff_role_update(id, data)
    res.status(200).send("data updated")
  }
  staff_role_delete = async function (req: any, res: any) {
    const param = req.params
    const id = { id: param.id }
    await staff_rolerepo.staff_role_delete(id)
    res.status(200).send("staff_role deleted")
  }
}
export = new Staff_role_controlller()