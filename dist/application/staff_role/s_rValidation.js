"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require('@hapi/joi');
const classSchema = {
    // staff_id: body.staff_id,
    // cls_id: body.cls_id,
    // subj_id: body.subj_id,
    sr_data: Joi.object().options({ abortEarly: false, stripUnknown: true })
        .keys({
        body: Joi.object().keys({
            staff_id: Joi.number().min(1).required(),
            Role_id: Joi.number().min(1).required()
        })
    }),
    sr_query: Joi.object().options({ abortEarly: false, stripUnknown: true })
        .keys({
        query: Joi.object().keys({
            currentPage: Joi.number().required(),
            perPage: Joi.number().required(),
        })
    }),
    sr_update: Joi.object().options({ abortEarly: false, stripUnknown: true })
        .keys({
        params: Joi.object().keys({
            id: Joi.number().required()
        }),
        body: Joi.object().keys({
            staff_id: Joi.number().min(1).required(),
            Role_id: Joi.number().min(1).required()
        })
    }),
    sr_delete: Joi.object().options({ abortEarly: false, stripUnknown: true })
        .keys({
        params: Joi.object().keys({
            id: Joi.number().required()
        })
    })
};
exports.default = classSchema;
