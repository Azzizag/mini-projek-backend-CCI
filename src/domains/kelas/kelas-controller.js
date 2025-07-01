const prisma = require("../../config/db");
const createKelasService = require("./kelas-service");
const { success } = require("../../utils/response.helper");

const kelasService = createKelasService(prisma);

const createKelas = async (req, res, next) => {
  try {
    const kelas = await kelasService.create(req.body);
    return success(res, kelas, "Kelas created", 201);
  } catch (err) {
    next(err);
  }
};

const getAllKelas = async (req, res, next) => {
  try {
    const data = await kelasService.findAll();
    return success(res, data);
  } catch (err) {
    next(err);
  }
};

const getKelasById = async (req, res, next) => {
  try {
    const data = await kelasService.findById(req.params.id);
    return success(res, data);
  } catch (err) {
    next(err);
  }
};

const updateKelas = async (req, res, next) => {
  try {
    const updated = await kelasService.update(req.params.id, req.body);
    return success(res, updated, "Kelas updated");
  } catch (err) {
    next(err);
  }
};

const deleteKelas = async (req, res, next) => {
  try {
    const deleted = await kelasService.remove(req.params.id);
    return success(res, deleted, "Kelas deleted");
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createKelas,
  getAllKelas,
  getKelasById,
  updateKelas,
  deleteKelas,
};