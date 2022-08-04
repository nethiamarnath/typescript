import { string } from 'joi';
import jwt from 'jsonwebtoken';
import token_config = require('../types/tokenconfig')
import jwt_gene = require('../config/jwt_config')


class token_verification {
  constructor() { }
  verify_Token = async function (st: string) {
    const decode = jwt.verify(st, token_config.app.acc_secret);
    return decode
  }
  check_Rtoken = async function (data: any) {
    try {
      const decode: any = jwt.verify(data.refresh_token, token_config.app.ref_secret);
      if (decode) {
        const aToken = await jwt_gene.generate_Token(decode.email)
        return aToken
      }
    }
    catch (Error: any) {
      if (Error.name === 'JsonWebTokenError') {
        return ({ error: 'invalid token' });
      } else if (Error.name === "TokenExpiredError") {
        return ("TokenExpired")
      } else {
        console.log("error")
      }
    }
  }
}
export = new token_verification