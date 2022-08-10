import subjectrepo = require('./subject_Repo')

class subject_controlller {

  subject_data = async function (req: any, res: any) {
    const body = req.body
    const data = {
      subject_name: body.subject_name,
      scl_id: body.scl_id
    }
    await subjectrepo.subject_data(data)
    res.status(200).send("data inserted successfuly")
  }
  subject_list = async function (req: any, res: any) {
    const query = req.query
    const paginate = {
      currentPage: query.currentPage,
      perPage: query.perPage,
      isLengthAware: true,
    }
    const result = await subjectrepo.subject_list(paginate)
    res.send(result)
  }
  subject_update = async function (req: any, res: any) {
    const param = req.params
    const body = req.body
    const id = { subj_id: param.subj_id }
    const data = {
      subject_name: body.subject_name,
      scl_id: body.scl_id
    }
    await subjectrepo.subject_update(id, data)
    res.status(200).send("data updated")
  }
  subject_delete = async function (req: any, res: any) {
    const param = req.params
    const id = { subj_id: param.subj_id }
    await subjectrepo.subject_delete(id)
    res.status(200).send("subject deleted")
  }
}
export = new subject_controlller()