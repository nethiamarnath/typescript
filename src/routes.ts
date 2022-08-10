import express = require('express')
const app = express()
import users = require('./application/user/userroute');
import admin = require('./application/admin/adminroute')
import school = require('./application/school/schoolroute')
import classes = require('./application/class/classroute')
import student = require('./application/student/studentroute')
import staff = require('./application/staff/staffRoute')
import role = require('./application/roles/roles_Route')
import school_admin = require('./application/school_admin/school_adminRoute')
import staff_class = require('./application/staff_class/s_cRoute')
import staff_role = require('./application/staff_role/s_rRoute')

app.use('/user', users)
app.use('/admin', admin)
app.use('/school', school)
app.use('/class', classes)
app.use('/student', student)
app.use('/staff', staff)
app.use('/roles', role)
app.use('/school_admin', school_admin)
app.use('/staff_class', staff_class)
app.use('/staff_role', staff_role)


export = app