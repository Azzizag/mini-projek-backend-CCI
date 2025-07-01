const prisma = require("../../config/db");
const createNilaiService = require("./nilai-service");
const { success } = require("../../utils/response.helper");

const nilaiService = createNilaiService(prisma);

const createNilai = async (req, res, next) => {
  try {
    const data = await nilaiService.create(req.body);
    return success(res, data, "Nilai created", 201);
  } catch (err) {
    next(err);
  }
};

const getAllNilai = async (req, res, next) => {
  try {
    const data = await nilaiService.findAll();
    return success(res, data);
  } catch (err) {
    next(err);
  }
};

const getNilaiById = async (req, res, next) => {
  try {
    const data = await nilaiService.findById(req.params.id);
    return success(res, data);
  } catch (err) {
    next(err);
  }
};

const updateNilai = async (req, res, next) => {
  try {
    const data = await nilaiService.update(req.params.id, req.body);
    return success(res, data, "Nilai updated");
  } catch (err) {
    next(err);
  }
};

const deleteNilai = async (req, res, next) => {
  try {
    const data = await nilaiService.remove(req.params.id);
    return success(res, data, "Nilai deleted");
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createNilai,
  getAllNilai,
  getNilaiById,
  updateNilai,
  deleteNilai
};
