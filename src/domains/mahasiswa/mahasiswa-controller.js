const prisma = require("../../config/db");
const createMahasiswaService = require("./mahasiswa-service");
const { success } = require("../../utils/response.helper");

const mahasiswaService = createMahasiswaService(prisma);

const createMahasiswa = async (req, res, next) => {
  try {
    const data = await mahasiswaService.create(req.body);
    return success(res, data, "Mahasiswa created", 201);
  } catch (err) {
    next(err);
  }
};

const getAllMahasiswa = async (req, res, next) => {
  try {
    const data = await mahasiswaService.findAll();
    return success(res, data);
  } catch (err) {
    next(err);
  }
};

const getMahasiswaById = async (req, res, next) => {
  try {
    const data = await mahasiswaService.findById(req.params.id);
    return success(res, data);
  } catch (err) {
    next(err);
  }
};

const updateMahasiswa = async (req, res, next) => {
  try {
    const data = await mahasiswaService.update(req.params.id, req.body);
    return success(res, data, "Mahasiswa updated");
  } catch (err) {
    next(err);
  }
};

const deleteMahasiswa = async (req, res, next) => {
  try {
    const data = await mahasiswaService.remove(req.params.id);
    return success(res, data, "Mahasiswa deleted");
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createMahasiswa,
  getAllMahasiswa,
  getMahasiswaById,
  updateMahasiswa,
  deleteMahasiswa
};