"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require('@hapi/joi');
const classSchema = {
    role_data: Joi.object().options({ abortEarly: false, stripUnknown: true })
        .keys({
        body: Joi.object().keys({
            role_name: Joi.string().min(2).max(20).required(),
        })
    }),
    role_query: Joi.object().options({ abortEarly: false, stripUnknown: true })
        .keys({
        query: Joi.object().keys({
            currentPage: Joi.number().required(),
            perPage: Joi.number().required(),
        })
    }),
    role_update: Joi.object().options({ abortEarly: false, stripUnknown: true })
        .keys({
        params: Joi.object().keys({
            Role_id: Joi.number().required()
        }),
        body: Joi.object().keys({
            role_name: Joi.string().required(),
        })
    }),
    role_delete: Joi.object().options({ abortEarly: false, stripUnknown: true })
        .keys({
        params: Joi.object().keys({
            Role_id: Joi.number().required()
        })
    })
};
exports.default = classSchema;
