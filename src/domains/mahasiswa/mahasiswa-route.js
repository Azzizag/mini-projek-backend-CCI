const express = require("express");
const {
  createMahasiswa,
  getAllMahasiswa,
  getMahasiswaById,
  updateMahasiswa,
  deleteMahasiswa,
} = require("./mahasiswa-controller");

const {
  createMahasiswaSchema,
  updateMahasiswaSchema,
} = require("./mahasiswa-schema");

const validate = require("../../middlewares/validate.middleware");
const { wrapAsync } = require("../../utils/handler");
const { requireAuth } = require("../../middlewares/auth.middleware");
const { requireRole } = require("../../middlewares/role.middleware");
const validateUUIDParam = require("../../middlewares/validateUUID.middleware");

const router = express.Router();

router.get("/", requireAuth, wrapAsync(getAllMahasiswa));
router.get("/:id", requireAuth, validateUUIDParam, wrapAsync(getMahasiswaById));
router.post("/", requireAuth, requireRole("ADMIN"), validate(createMahasiswaSchema), wrapAsync(createMahasiswa));
router.put("/:id", requireAuth, requireRole("ADMIN"), validateUUIDParam, validate(updateMahasiswaSchema), wrapAsync(updateMahasiswa));
router.delete("/:id", requireAuth, requireRole("ADMIN"), validateUUIDParam, wrapAsync(deleteMahasiswa));

module.exports = router;