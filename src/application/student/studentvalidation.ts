const Joi = require('@hapi/joi');

const studentSchema = {

  student_data: Joi.object().options({ abortEarly: false, stripUnknown: true })
    .keys({
      body: Joi.object().keys({
        std_name: Joi.string().required(),
        cls_id: Joi.number().min(1).required(),
        scl_id: Joi.number().min(1).required(),
        status: Joi.boolean().required(),
        dob: Joi.date().iso().messages({ 'date.format': `Date format is YYYY-MM-DD` }).required()
      })
    }),
  student_query: Joi.object().options({ abortEarly: false, stripUnknown: true })
    .keys({
      query: Joi.object().keys({
        currentPage: Joi.number().required(),
        perPage: Joi.number().required(),
      })
    }),
  student_update: Joi.object().options({ abortEarly: false, stripUnknown: true })
    .keys({
      params: Joi.object().keys({
        std_id: Joi.number().required()
      }),
      body: Joi.object().keys({
        std_name: Joi.string().required(),
        dob: Joi.date().iso().messages({ 'date.format': `Date format is YYYY-MM-DD` }).required()
      })
    }),
  student_delete: Joi.object().options({ abortEarly: false, stripUnknown: true })
    .keys({
      params: Joi.object().keys({
        std_id: Joi.number().required()
      })
    })

}

export default studentSchema;