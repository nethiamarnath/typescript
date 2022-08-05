"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const adminrepo = require("./adminrepo");
const validation = require("./adminvalidation");
class adminController {
    constructor() {
        this.school_data = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const body = req.body;
                const data = {
                    scl_name: body.scl_name,
                    estb_year: body.estb_year,
                    no_of_employees: body.no_of_employees
                };
                // const flag: boolean = validation.school_data(data)
                // if (!flag) {
                //   res.status(400).send("please check the input data")
                // }
                // else {
                const result = yield adminrepo.school_data(data);
                res.status(200).send("data inserted successfuly");
                // }
            });
        };
        this.class_data = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const body = req.body;
                const data = {
                    cls_name: body.cls_name,
                    no_of_students: body.no_of_students
                };
                const flag = validation.class_data(data);
                if (!flag) {
                    res.status(400).send("please check the input data");
                }
                else {
                    const result = yield adminrepo.class_data(data);
                    res.status(200).send("data inserted successfuly");
                }
            });
        };
        this.students_data = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const body = req.body;
                const data = {
                    std_name: body.std_name,
                    cls_id: body.cls_id,
                    scl_id: body.scl_id,
                    status: body.status,
                    dob: body.dob
                };
                const flag = validation.students_data(data);
                if (!flag) {
                    res.status(400).send("please check the input data");
                }
                else {
                    const n = yield adminrepo.get_no_of_students(data.cls_id);
                    const count = yield adminrepo.get_students_count(data.cls_id);
                    if (n.no_of_students >= count.a) {
                        const result = yield adminrepo.students_data(data);
                        res.status(200).send("data inserted successfully");
                    }
                    else {
                        res.status(400).send("the class is full");
                    }
                }
            });
        };
        this.exam_data = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const body = req.body;
                const data = {
                    exam_name: body.exam_name,
                    order_by: body.order_by
                };
                const flag = validation.exam_data(data);
                if (!flag) {
                    res.status(400).send("please check the input data");
                }
                else {
                    const result = yield adminrepo.exam_data(data);
                    res.status(200).send("data inserted successfuly");
                }
            });
        };
        this.std_exam_data = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const body = req.body;
                const data = {
                    std_id: body.std_id,
                    exam_id: body.exam_id,
                    percentage: body.percentage,
                    grade: body.grade
                };
                const flag = validation.std_exam_data(data);
                if (!flag) {
                    res.status(400).send("please check the input data");
                }
                else {
                    const result = yield adminrepo.std_exam_data(data);
                    res.status(200).send("data inserted successfuly");
                }
            });
        };
        this.marks_data = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const body = req.body;
                const data = {
                    se_id: body.se_id,
                    maths: body.maths,
                    physics: body.physics,
                    chemistry: body.chemistry,
                    english: body.english,
                    french: body.french
                };
                const flag = validation.marks_data(data);
                if (!flag) {
                    res.status(400).send("please check the input data");
                }
                else {
                    const percentage = ((data.chemistry + data.english + data.french + data.maths + data.physics) / 600) * 100;
                    var grade;
                    switch (true) {
                        case percentage > 91:
                            return 'A+';
                            break;
                        case percentage < 90 && percentage > 81:
                            grade = 'A';
                            break;
                        case percentage < 80 && percentage > 71:
                            grade = 'B';
                            break;
                        case percentage < 70 && percentage > 61:
                            grade = 'C';
                            break;
                        case percentage < 60:
                            grade = 'fail';
                            break;
                        default:
                            grade = 'Absent';
                            break;
                    }
                    const result = yield adminrepo.marks_data(data, percentage, grade, data.se_id);
                    res.status(200).send("data inserted successfuly");
                }
            });
        };
        this.student_list = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const body = req.body;
                const paginate = {
                    currentPage: body.current_page,
                    perPage: body.per_page,
                    isLengthAware: true,
                };
                const result = yield adminrepo.student_list(paginate);
                res.send(result);
            });
        };
        this.student_update = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const body = req.body;
                const data = {
                    std_id: body.std_id,
                    new_name: body.new_name
                };
                try {
                    yield adminrepo.students_update(data);
                    res.status(200).send("Name updated successfully");
                }
                catch (error) {
                    res.status(400).send(error);
                }
            });
        };
        this.student_del = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const body = req.body;
                const data = {
                    std_id: body.std_id
                };
                yield adminrepo.students_del(data);
                res.status(200).send("Student removed");
            });
        };
    }
}
module.exports = new adminController();
