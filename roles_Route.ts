import express from "express";
var router = express.Router();
import roles_Controller = require('./roles_Controller')
import schema from './roles_Validation'
import validator from '../../helper/validatorResponse'

router.post("/details", validator(schema.role_data), roles_Controller.role_data)
router.get('/', validator(schema.role_query), roles_Controller.role_list)
router.put('/:Role_id', validator(schema.role_update), roles_Controller.role_update)
router.delete('/:Role_id', validator(schema.role_delete), roles_Controller.role_delete)



export = router;