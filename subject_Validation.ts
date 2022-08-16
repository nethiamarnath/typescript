const Joi = require('@hapi/joi');

const classSchema = {

  subject_data: Joi.object().options({ abortEarly: false, stripUnknown: true })
    .keys({
      body: Joi.object().keys({
        subject_name: Joi.string().min(3).required(),
        scl_id: Joi.number().min(1).required()
      })
    }),
  subject_query: Joi.object().options({ abortEarly: false, stripUnknown: true })
    .keys({
      query: Joi.object().keys({
        currentPage: Joi.number().required(),
        perPage: Joi.number().required(),
      })
    }),
  subject_update: Joi.object().options({ abortEarly: false, stripUnknown: true })
    .keys({
      params: Joi.object().keys({
        subj_id: Joi.number().required()
      }),
      body: Joi.object().keys({
        subject_name: Joi.string().min(3).required(),
        scl_id: Joi.number().min(1).required()
      })
    }),
  subject_delete: Joi.object().options({ abortEarly: false, stripUnknown: true })
    .keys({
      params: Joi.object().keys({
        subj_id: Joi.number().required()
      })
    })

}

export default classSchema;