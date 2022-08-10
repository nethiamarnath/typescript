import express from "express";
var router = express.Router();
import staffController = require('./staffController')
import schema from './staffValidation'
import validator from '../../helper/validatorResponse'
import verify_token = require("../../middleware/token_verification");

router.post("/details", validator(schema.staff_data), staffController.staff_data)
router.get('/', validator(schema.staff_query), staffController.staff_list)
router.put('/:std_id', verify_token, validator(schema.staff_update), staffController.staff_update)
router.delete('/:std_id', verify_token, validator(schema.staff_delete), staffController.staff_delete)
router.post('/login', validator(schema.staff_login), staffController.staff_login)

export = router;                                        