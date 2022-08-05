import schoolrepo = require('./schoolrepo')

class studentcontrolller {

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
    await schoolrepo.school_data(data)
    res.status(200).send("data inserted successfuly")
  }
  school_list = async function (req: any, res: any) {
    const query = req.query
    const paginate = {
      currentPage: query.currentPage,
      perPage: query.perPage,
      isLengthAware: true,
    }
    const result = await schoolrepo.school_list(paginate)
    res.send(result)
  }
  school_update = async function (req: any, res: any) {
    const param = req.params
    const body = req.body
    const id = { scl_id: param.scl_id }
    const data = {
      scl_name: body.scl_name,
      estb_year: body.estb_year
    }
    await schoolrepo.school_update(id, data)
    res.status(200).send("data updated")
  }
  school_delete = async function (req: any, res: any) {
    const param = req.params
    const id = { scl_id: param.scl_id }
    await schoolrepo.school_delete(id)
    res.status(200).send("school deleted")
  }
}
export = new studentcontrolller()