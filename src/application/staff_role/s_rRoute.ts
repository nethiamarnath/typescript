import express from "express";
var router = express.Router();
import staff_role_Controller = require('./s_rController')
import schema from './s_rValidation'
import validator from '../../helper/validatorResponse'

router.post("/details", validator(schema.sr_data), staff_role_Controller.staff_role_data)
router.get('/', validator(schema.sr_query), staff_role_Controller.staff_role_list)
router.put('/:id', validator(schema.sr_update), staff_role_Controller.staff_role_update)
router.delete('/:id', validator(schema.sr_delete), staff_role_Controller.staff_role_delete)

export = router;