import express from "express";
var router = express.Router();
import studentController = require('./studentController')
import schema from './studentvalidation'
import validator from '../../helper/validatorResponse'

router.post("/details", validator(schema.student_data), studentController.student_data)
router.get('/', validator(schema.student_query), studentController.student_list)
router.put('/:std_id', validator(schema.student_update), studentController.student_update)
router.delete('/:std_id', validator(schema.student_delete), studentController.student_delete)

export = router;



