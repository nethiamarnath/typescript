import express from "express";
var router = express.Router();
import Admin_controller = require('./adminController')
import schema from './adminValidator'
import validator from '../../helper/validatorResponse'

// router.get('/getDetails', Admin_controller.displayemployeeData)
// router.post('/loginDetails', Admin_controller.employeeLogindetails)
// router.post('/generate_acc', Admin_controller.generate_acc_token)
// router.put('/updatedetails', Admin_controller.update_name)
router.post("/school", validator(schema.school_data), Admin_controller.school_data)
router.post('/class', Admin_controller.class_data)
router.post('/students', Admin_controller.students_data)

router.post('/std_exam', Admin_controller.std_exam_data)
router.post('/exam', Admin_controller.exam_data)
router.post('/marks', Admin_controller.marks_data)
router.delete('/students_del', Admin_controller.student_del)
router.put('/students_updt', Admin_controller.student_update)
router.get('/student_list', Admin_controller.student_list)

///school
// post school/ save
// get school?page=1&offset=10  list of schools.
// put school/{:shoolID} student details.
// delete school/{:shoolID}






export = router;