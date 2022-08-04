require('dotenv').config()
const t_config = {
  'app': {
    acc_secret: <Secret>process.env.ACCESS_TOKEN_SECRET,
    ref_secret: <Secret>process.env.REFRESH_TOKEN_SECRET,
    acc_exp: process.env.ACCESS_EXPIRIES,
    ref_exp: process.env.REFRESS_EXPIRIES
  },
  'mail': {

  }
}
export = t_config