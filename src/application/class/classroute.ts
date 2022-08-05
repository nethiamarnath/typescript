import express from "express";
var router = express.Router();
import classController = require('./classController')
import schema from './classvalidation'
import validator from '../../helper/validatorResponse'

router.post("/details", validator(schema.class_data), classController.class_data)
router.get('/', validator(schema.class_query), classController.class_list)
router.put('/:cls_id', validator(schema.class_update), classController.class_update)
router.delete('/:cls_id', validator(schema.class_delete), classController.class_delete)

export = router;



