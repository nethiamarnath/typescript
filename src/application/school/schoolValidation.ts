const Joi = require('@hapi/joi');

const SchoolSchema = {

  school_data: Joi.object().options({ abortEarly: false, stripUnknown: true })
    .keys({
      body: Joi.object().keys({
        scl_name: Joi.string().min(4).required(),
        estb_year: Joi.number().required(),
        no_of_employees: Joi.number().required()
      })
    }),
  school_query: Joi.object().options({ abortEarly: false, stripUnknown: true })
    .keys({
      query: Joi.object().keys({
        currentPage: Joi.number().required(),
        perPage: Joi.number().required(),
      })
    }),
  school_update: Joi.object().options({ abortEarly: false, stripUnknown: true })
    .keys({
      params: Joi.object().keys({
        scl_id: Joi.number().required()
      }),
      body: Joi.object().keys({
        scl_name: Joi.string().required(),
        estb_year: Joi.number().required()
      })
    }),
  school_delete: Joi.object().options({ abortEarly: false, stripUnknown: true })
    .keys({
      params: Joi.object().keys({
        scl_id: Joi.number().required()
      })
    })

}

export default SchoolSchema;