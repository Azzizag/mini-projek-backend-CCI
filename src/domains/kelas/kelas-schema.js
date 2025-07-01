// src/domains/kelas/kelas-schema.js
const Joi = require("joi");

const createKelasSchema = Joi.object({
  nama: Joi.string().required(),
  wali: Joi.string().required()
});

const updateKelasSchema = Joi.object({
  nama: Joi.string(),
  wali: Joi.string()
});

module.exports = {
  createKelasSchema,
  updateKelasSchema
};
