const Joi = require('@hapi/joi');

const staffSchema = {

  staff_data: Joi.object().options({ abortEarly: false, stripUnknown: true })
    .keys({
      body: Joi.object().keys({
        scl_id: Joi.number().min(1).required(),
        f_name: Joi.string().max(12).required(),
        l_name: Joi.string().max(12).required(),
        phone_no: Joi.string().max(10).required(),
        status: Joi.boolean().required(),
        email: Joi.string().email().required(),
        qualification: Joi.string().required(),
        password: Joi.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$/).required()
      })
    }),
  staff_query: Joi.object().options({ abortEarly: false, stripUnknown: true })
    .keys({
      query: Joi.object().keys({
        currentPage: Joi.number().required(),
        perPage: Joi.number().required(),
      })
    }),
  staff_update: Joi.object().options({ abortEarly: false, stripUnknown: true })
    .keys({
      params: Joi.object().keys({
        staff_id: Joi.number().required()
      }),
      body: Joi.object().keys({
        email: Joi.string().email().required(),
        phone_no: Joi.string().max(10).required()
      })
    }),
  staff_delete: Joi.object().options({ abortEarly: false, stripUnknown: true })
    .keys({
      params: Joi.object().keys({
        staff_id: Joi.number().required()
      })
    }),
  staff_login: Joi.object().options({ abortEarly: false, stripUnknown: true })
    .keys({
      body: Joi.object().keys({
        staff_id: Joi.number().required(),
        password: Joi.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$/).required()
      })

    })

}

export default staffSchema;