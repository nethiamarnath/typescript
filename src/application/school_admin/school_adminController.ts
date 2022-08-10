import sarepo = require('./school_adminRepo')
import encryption = require('../../helper/encrypt_jwt')
class sacontrolller {
  sa_data = async function (req: any, res: any) {
    const body = req.body
    const password = body.password

    const save: any = {
      Role_id: body.Role_id,
      Name: body.Name,
      phone_no: body.phone_no,
      email: body.email,
      status: body.status,
      scl_id: body.scl_id
    }
    const hashing: any = await encryption.encrypt(password)
    save.password = hashing.password;
    save.salt = hashing.salt;
    const result = await sarepo.sa_data(save)
    if (!result)
      res.status(400).send(result)
    else
      res.status(200).send("data inserted successfuly")
  }
  sa_list = async function (req: any, res: any) {
    const query = req.query
    const paginate = {
      currentPage: query.currentPage,
      perPage: query.perPage,
      isLengthAware: true,
    }
    const result = await sarepo.sa_list(paginate)
    res.send(result)
  }
  sa_update = async function (req: any, res: any) {
    const param = req.params
    const body = req.body
    const id = { admin_id: param.admin_id }
    const data = {
      Name: body.Name,
      phone_no: body.phone_no
    }
    await sarepo.sa_update(id, data)
    res.status(200).send("data updated")
  }
  sa_delete = async function (req: any, res: any) {
    const param = req.params
    const id = { admin_id: param.admin_id }
    await sarepo.sa_delete(id)
    res.status(200).send(" sa deleted")
  }
  sa_login = async function (req: any, res: any) {
    const body = req.body
    const auth: any = {
      admin_id: body.admin_id,
      password: body.password
    }
    const salt: any = await sarepo.sa_salt(auth.admin_id)
    auth.salt = salt.salt
    const hashing: any = await encryption.encrypt_psrd(auth.password, auth.salt)
    const tokens: any = await encryption.login(salt.email)
    tokens.admin_id = auth.admin_id
    const result = await sarepo.sa_login(tokens)
    res.send(tokens)
  }
}
export = new sacontrolller()



