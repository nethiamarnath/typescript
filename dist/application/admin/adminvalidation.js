"use strict";
const Joi = require('joi');
class validate {
    constructor() { }
    school_data(user) {
        const school_data = Joi.object({
            scl_name: Joi.string().min(4).required(),
            estb_year: Joi.number().required(),
            no_of_employees: Joi.number().required()
        }).options({ abortEarly: false });
        return school_data.validateAsync(user);
    }
    class_data(user) {
        const class_data = Joi.object({
            cls_name: Joi.string().min(5).max(20).required(),
            no_of_students: Joi.number().required(),
        }).options({ abortEarly: false });
        return class_data.validateAsync(user);
    }
    students_data(user) {
        const students_data = Joi.object({
            std_name: Joi.string().required(),
            cls_id: Joi.number().min(1).required(),
            scl_id: Joi.number()
                .min(1)
                .required(),
            status: Joi.boolean()
                .required(),
            dob: Joi.date().iso().messages({ 'date.format': `Date format is YYYY-MM-DD` }).required(),
        }).options({ abortEarly: false });
        return students_data.validateAsync(user);
    }
    exam_data(user) {
        const exam = Joi.object({
            exam_name: Joi.string()
                .required(),
            order_by: Joi.number()
        }).options({ abortEarly: false });
        return exam.validateAsync(user);
    }
    std_exam_data(user) {
        const std_exam = Joi.object({
            std_id: Joi.number()
                .required(),
            exam_id: Joi.number()
                .required(),
            percentage: Joi.number(),
            grade: Joi.string()
        }).options({ abortEarly: false });
        return std_exam.validateAsync(user);
    }
    marks_data(user) {
        const marks = Joi.object({
            se_id: Joi.number()
                .required(),
            maths: Joi.number()
                .max(100)
                .required(),
            physics: Joi.number()
                .max(100)
                .required(),
            chemistry: Joi.number()
                .max(100)
                .required(),
            english: Joi.number()
                .max(100)
                .required(),
            french: Joi.number()
                .max(100)
                .required()
        }).options({ abortEarly: false });
        return marks.validateAsync(user);
    }
    login_validation(user) {
        const JoiLogin = Joi.object({
            email: Joi.string()
                .email()
                .min(5)
                .max(50)
                .required(),
            password: Joi.string()
                .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$/)
                .required()
        }).options({ abortEarly: false });
        return JoiLogin.validateAsync(user);
    }
}
module.exports = new validate();
