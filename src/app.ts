import express, { NextFunction, Request, Response } from "express";
const app = express()
import route = require('./routes')
import i18n from 'i18n'
import path from 'path'

i18n.configure({
  locales: ['en', 'de'],
  directory: path.join(__dirname, 'locales'),
  defaultLocale: 'en',
  header: 'accept-language',
  register: global
})

app.use(function (req: Request, res: Response, next: NextFunction) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization')
  i18n.setLocale(<string>req.headers['accept-language'])
  i18n.init(req, res)
  next()
})

app.use(express.json())
app.use(route)
app.listen(3000)
exports = app;










































