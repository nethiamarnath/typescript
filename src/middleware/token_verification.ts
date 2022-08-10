import jwt = require('jsonwebtoken')
import configkeys = require('../types/tokenconfig')


const verify_token = async function (req: any, res: any, next: any) {
  try {
    const token: string = req.headers.access_token
    let key = <Secret>configkeys.app.acc_secret;
    const userdata: any = jwt.verify(token, key)
    type tokenCheck = {
      UserId: number,
      access_token: string
    }
    const tokendetails: tokenCheck = {
      UserId: userdata.UserId,
      access_token: token
    }
    next()
  } catch (Error: any) {
    if (Error.name === "TokenExpiredError") {
      res.status(440).send({ 'message': 'Token access expired' })
    }
    else if (Error.name === "JsonWebTokenError") {
      res.status(441).send({ "Message": 'Invalid access token' })
    }
  }
}
export = verify_token