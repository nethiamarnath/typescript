"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require('@hapi/joi');
const classSchema = {
    sa_data: Joi.object().options({ abortEarly: false, stripUnknown: true })
        .keys({
        body: Joi.object().keys({
            Role_id: Joi.number().min(1).required(),
            Name: Joi.string().min(2).max(20).required(),
            phone_no: Joi.string().max(10).required(),
            email: Joi.string().email().required(),
            password: Joi.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$/).required(),
            status: Joi.number().required()
        })
    }),
    sa_query: Joi.object().options({ abortEarly: false, stripUnknown: true })
        .keys({
        query: Joi.object().keys({
            currentPage: Joi.number().required(),
            perPage: Joi.number().required(),
        })
    }),
    sa_update: Joi.object().options({ abortEarly: false, stripUnknown: true })
        .keys({
        params: Joi.object().keys({
            admin_id: Joi.number().required()
        }),
        body: Joi.object().keys({
            Name: Joi.string().min(2).max(20).required(),
            phone_no: Joi.string().max(10).required(),
        })
    }),
    sa_delete: Joi.object().options({ abortEarly: false, stripUnknown: true })
        .keys({
        params: Joi.object().keys({
            admin_id: Joi.number().required()
        })
    }),
    sa_login: Joi.object().options({ abortEarly: false, stripUnknown: true })
        .keys({
        body: Joi.object().keys({
            admin_id: Joi.number().required(),
            password: Joi.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$/).required()
        })
    })
};
exports.default = classSchema;
