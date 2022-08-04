import jwt from 'jsonwebtoken';
import token_config = require('../types/tokenconfig')
class config {
  constructor() { }

  //generating access_token
  async generate_Token(email: string) {
    const accesstoken: string = jwt.sign({ email }, token_config.app.acc_secret, { expiresIn: token_config.app.acc_exp })
    return accesstoken
  }
  async generate_Rtoken(email: string) {
    const rtoken: string = jwt.sign({ email }, token_config.app.ref_secret, { expiresIn: token_config.app.ref_exp })
    return rtoken
  }

  async login(data: any) {
    const email = data.email
    const token: string = await this.generate_Token(email)
    const r_token: string = await this.generate_Rtoken(email)
    return { token, r_token, email }
  }
}
export = new config()