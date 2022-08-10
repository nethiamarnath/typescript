const Joi = require('@hapi/joi');

const classSchema = {
  // staff_id: body.staff_id,
  // cls_id: body.cls_id,
  // subj_id: body.subj_id,
  sc_data: Joi.object().options({ abortEarly: false, stripUnknown: true })
    .keys({
      body: Joi.object().keys({
        staff_id: Joi.number().min(1).required(),
        cls_id: Joi.number().min(1).required(),
        subj_id: Joi.number().min(1).required(),
        status: Joi.number().required()
      })
    }),
  sc_query: Joi.object().options({ abortEarly: false, stripUnknown: true })
    .keys({
      query: Joi.object().keys({
        currentPage: Joi.number().required(),
        perPage: Joi.number().required(),
      })
    }),
  sc_update: Joi.object().options({ abortEarly: false, stripUnknown: true })
    .keys({
      params: Joi.object().keys({
        id: Joi.number().required()
      }),
      body: Joi.object().keys({
        staff_id: Joi.number().min(1).required(),
        cls_id: Joi.number().min(1).required(),
        subj_id: Joi.number().min(1).required(),
      })
    }),
  sc_delete: Joi.object().options({ abortEarly: false, stripUnknown: true })
    .keys({
      params: Joi.object().keys({
        id: Joi.number().required()
      })
    })

}

export default classSchema;