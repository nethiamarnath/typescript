"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require('@hapi/joi');
const AdminSchema = {
    school_data: Joi.object().options({ abortEarly: false, stripUnknown: true })
        .keys({
        body: Joi.object().keys({
            cl_name: Joi.string().min(4).required(),
            estb_year: Joi.number().required(),
            no_of_employees: Joi.number().required()
        }),
        // query: Joi.object().keys({
        // }),
        // parmes: Joi.object().keys({
        // }),
    }),
    class_data: Joi.object().options({ abortEarly: false, stripUnknown: true })
        .keys({
        body: Joi.object().keys({
            cls_name: Joi.string().min(5).max(20).required(),
            no_of_students: Joi.number().required(),
        })
    }),
};
exports.default = AdminSchema;
