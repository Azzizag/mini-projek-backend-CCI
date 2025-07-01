const express = require("express");
const {
  createKelas,
  getAllKelas,
  getKelasById,
  updateKelas,
  deleteKelas,
} = require("./kelas-controller");

const {
  createKelasSchema,
  updateKelasSchema,
} = require("./kelas-schema");

const validate = require("../../middlewares/validate.middleware");
const { requireAuth } = require("../../middlewares/auth.middleware");
const { requireRole } = require("../../middlewares/role.middleware");
const validateUUIDParam = require("../../middlewares/validateUUID.middleware");
const { wrapAsync } = require("../../utils/handler");

const router = express.Router();

router.get("/", requireAuth, wrapAsync(getAllKelas));
router.get("/:id", requireAuth, validateUUIDParam, wrapAsync(getKelasById));
router.post("/", requireAuth, requireRole("ADMIN"), validate(createKelasSchema), wrapAsync(createKelas));
router.put("/:id", requireAuth, requireRole("ADMIN"), validateUUIDParam, validate(updateKelasSchema), wrapAsync(updateKelas));
router.delete("/:id", requireAuth, requireRole("ADMIN"), validateUUIDParam, wrapAsync(deleteKelas));

module.exports = router;