import express from "express";
var router = express.Router();
import staff_class_Controller = require('./s_cController')
import schema from './s_cValidation'
import validator from '../../helper/validatorResponse'

router.post("/details", validator(schema.sc_data), staff_class_Controller.staff_class_data)
router.get('/', validator(schema.sc_query), staff_class_Controller.staff_class_list)
router.put('/:id', validator(schema.sc_update), staff_class_Controller.staff_class_update)
router.delete('/:id', validator(schema.sc_delete), staff_class_Controller.staff_class_delete)

export = router;