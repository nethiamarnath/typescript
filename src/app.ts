import express from "express";
const app = express()
import route = require('./routes')
app.use(express.json())
app.use(route)
app.listen(3000)
exports = app;










































