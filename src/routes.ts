import express = require('express')
const app = express()
import users = require('./application/user/userroute');
import admin = require('./application/admin/adminroute')
app.use('/user', users)
app.use('/admin', admin)
export = app