// src/domains/mahasiswa/mahasiswa-schema.js
const Joi = require("joi");

const createMahasiswaSchema = Joi.object({
  nama: Joi.string().required(),
  nim: Joi.string().required(),
  kelasId: Joi.string().uuid().required()
});

const updateMahasiswaSchema = Joi.object({
  nama: Joi.string(),
  nim: Joi.string(),
  kelasId: Joi.string().uuid()
});

module.exports = {
  createMahasiswaSchema,
  updateMahasiswaSchema
};

