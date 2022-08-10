import express from "express";
var router = express.Router();
import subject_Controller = require('./subject_Controller')
import schema from './subject_Validation'
import validator from '../../helper/validatorResponse'

router.post("/details", validator(schema.subject_data), subject_Controller.subject_data)
router.get('/', validator(schema.subject_query), subject_Controller.subject_list)
router.put('/:id', validator(schema.subject_update), subject_Controller.subject_update)
router.delete('/:id', validator(schema.subject_delete), subject_Controller.subject_delete)

export = router;