import express from "express";
var router = express.Router();
import school_adminController = require('./school_adminController')
import schema from './school_adminValidation'
import validator from '../../helper/validatorResponse'
import verify_token from '../../middleware/token_verification'

router.post("/details", validator(schema.sa_data), school_adminController.sa_data)
router.get('/', verify_token, validator(schema.sa_query), school_adminController.sa_list)
router.put('/:scl_id', verify_token, validator(schema.sa_update), school_adminController.sa_update)
router.delete('/:scl_id', verify_token, validator(schema.sa_delete), school_adminController.sa_delete)
router.post('/login', validator(schema.sa_login), school_adminController.sa_login)
export = router;