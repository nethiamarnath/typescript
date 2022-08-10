import staffrepo = require('./staffrepo')
import encryption = require('../../helper/encrypt_jwt')

class staffControlller {

  staff_data = async function (req: any, res: any) {
    const body = req.body
    const password = body.password
    const save: any = {
      scl_id: body.scl_id,
      f_name: body.f_name,
      l_name: body.l_name,
      phone_no: body.phone_no,
      status: body.status,
      email: body.email,
      qualification: body.qualification,
    }
    const hashing: any = await encryption.encrypt(password)
    save.password = hashing.password;
    save.salt = hashing.salt;
    const result = await staffrepo.staff_data(save)
    res.send({ 'Message': res.__('data_inserted') })
  }
  staff_list = async function (req: any, res: any) {
    const query = req.query
    const paginate = {
      currentPage: query.currentPage,
      perPage: query.perPage,
      isLengthAware: true,
    }
    const result = await staffrepo.staff_list(paginate)
    res.send(result)
  }
  staff_update = async function (req: any, res: any) {
    const param = req.params
    const body = req.body
    const id = { staff_id: param.staff_id }
    const data = {
      email: body.email,
      phone_no: body.phone_no
    }
    await staffrepo.staff_update(id, data)
    res.send({ 'Message': res.__('dataUpdated') })
  }
  staff_delete = async function (req: any, res: any) {
    const param = req.params
    const id = { staff_id: param.staff_id }
    await staffrepo.staff_delete(id)
    res.send({ 'Message': res.__('UserDeleted') })
  }
  staff_login = async function (req: any, res: any) {
    const body = req.body
    const auth: any = {
      staff_id: body.staff_id,
      password: body.password
    }
    const salt: any = await staffrepo.staff_salt(auth.staff_id)
    auth.salt = salt.salt
    const hashing: any = await encryption.encrypt_psrd(auth.password, auth.salt)
    const tokens: any = await encryption.login(salt.email)
    tokens.staff_id = auth.staff_id
    const result = await staffrepo.staff_login(tokens)
    res.send(tokens)
  }
}
export = new staffControlller()


