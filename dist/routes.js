"use strict";
const express = require("express");
const app = express();
const users = require("./application/user/userroute");
const admin = require("./application/admin/adminroute");
app.use('/user', users);
app.use('/admin', admin);
module.exports = app;
