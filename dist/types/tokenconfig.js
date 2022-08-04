"use strict";
require('dotenv').config();
const t_config = {
    'app': {
        acc_secret: process.env.ACCESS_TOKEN_SECRET,
        ref_secret: process.env.REFRESH_TOKEN_SECRET,
        acc_exp: process.env.ACCESS_EXPIRIES,
        ref_exp: process.env.REFRESS_EXPIRIES
    },
    'mail': {}
};
module.exports = t_config;
