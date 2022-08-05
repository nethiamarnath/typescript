const Joi = require('@hapi/joi');

const classSchema = {

  class_data: Joi.object().options({ abortEarly: false, stripUnknown: true })
    .keys({
      body: Joi.object().keys({
        cls_name: Joi.string().min(5).max(20).required(),
        no_of_students: Joi.number().required(),
      })
    }),
  class_query: Joi.object().options({ abortEarly: false, stripUnknown: true })
    .keys({
      query: Joi.object().keys({
        currentPage: Joi.number().required(),
        perPage: Joi.number().required(),
      })
    }),
  class_update: Joi.object().options({ abortEarly: false, stripUnknown: true })
    .keys({
      params: Joi.object().keys({
        cls_id: Joi.number().required()
      }),
      body: Joi.object().keys({
        cls_name: Joi.string().required(),
        no_of_students: Joi.number().required()
      })
    }),
  class_delete: Joi.object().options({ abortEarly: false, stripUnknown: true })
    .keys({
      params: Joi.object().keys({
        cls_id: Joi.number().required()
      })
    })

}

export default classSchema;