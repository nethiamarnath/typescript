import express = require('express')
const app = express()
import users = require('./application/user/userroute');
import admin = require('./application/admin/adminroute')
import school = require('./application/school/schoolroute')
import classes = require('./application/class/classroute')

app.use('/user', users)
app.use('/admin', admin)
app.use('/school', school)
app.use('/class', classes)
export = app