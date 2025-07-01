// src/domains/nilai/nilai-schema.js
const Joi = require("joi");

const createNilaiSchema = Joi.object({
  mataKuliah: Joi.string().required(),
  nilai: Joi.number().required(),
  huruf: Joi.string().required(),
  mahasiswaId: Joi.string().uuid().required()
});

const updateNilaiSchema = Joi.object({
  mataKuliah: Joi.string(),
  nilai: Joi.number(),
  huruf: Joi.string(),
  mahasiswaId: Joi.string().uuid()
});

module.exports = {
  createNilaiSchema,
  updateNilaiSchema
};

