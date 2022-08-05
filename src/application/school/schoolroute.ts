import express from "express";
var router = express.Router();
import schoolController = require('./schoolController')
import schema from './schoolValidation'
import validator from '../../helper/validatorResponse'

router.post("/details", validator(schema.school_data), schoolController.school_data)
router.get('/', validator(schema.school_query), schoolController.school_list)
router.put('/:scl_id', validator(schema.school_update), schoolController.school_update)
router.delete('/:scl_id', validator(schema.school_delete), schoolController.school_delete)




///school
// post school/ save
// get school?page=1&offset=10  list of schools.
// put school/{:shoolID} student details.
// delete school/{:shoolID}



export = router;