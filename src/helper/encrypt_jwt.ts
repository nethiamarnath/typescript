import jwt from 'jsonwebtoken';
import token_config = require('../types/tokenconfig')
import bcrypt from "bcryptjs"

class Tokengene {
  constructor() { }

  //generating access_token
  async generate_Token(email: string) {
    const access_token: string = jwt.sign({ email }, token_config.app.acc_secret, { expiresIn: token_config.app.acc_exp })
    return access_token
  }
  async generate_Rtoken(email: string) {
    const refresh_token: string = jwt.sign({ email }, token_config.app.ref_secret, { expiresIn: token_config.app.ref_exp })
    return refresh_token
  }
  async login(data: string) {
    const email = data
    const access_token: string = await this.generate_Token(email)
    const refresh_token: string = await this.generate_Rtoken(email)
    return { access_token, refresh_token }
  }
  async encrypt(psrd: string) {
    const salt: string = bcrypt.genSaltSync(10)
    const password = await bcrypt.hash(psrd, salt)
    return { password, salt }
  }
  async encrypt_psrd(psrd: string, salt: string) {
    const password = await bcrypt.hash(psrd, salt)
    return { password }
  }
}
export = new Tokengene()