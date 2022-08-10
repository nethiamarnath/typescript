import rolerepo = require('./roles_Repo')

class rolecontrolller {

  role_data = async function (req: any, res: any) {
    const body = req.body
    const data = {
      role_name: body.role_name,
    }
    await rolerepo.role_data(data)
    res.status(200).send("data inserted successfuly")
  }
  role_list = async function (req: any, res: any) {
    const query = req.query
    const paginate = {
      currentPage: query.currentPage,
      perPage: query.perPage,
      isLengthAware: true,
    }
    const result = await rolerepo.role_list(paginate)
    res.send(result)
  }
  role_update = async function (req: any, res: any) {
    const param = req.params
    const body = req.body
    const id = { Role_id: param.Role_id }
    const data = {
      role_name: body.role_name,
    }
    await rolerepo.role_update(id, data)
    res.status(200).send("data updated")
  }
  role_delete = async function (req: any, res: any) {
    const param = req.params
    const id = { Role_id: param.Role_id }
    await rolerepo.role_delete(id)
    res.status(200).send(" role deleted")
  }
}
export = new rolecontrolller()