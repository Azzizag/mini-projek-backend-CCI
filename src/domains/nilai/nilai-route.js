// src/domains/nilai/nilai-route.js
const express = require("express");
const {
  createNilai,
  getAllNilai,
  getNilaiById,
  updateNilai,
  deleteNilai
} = require("./nilai-controller");

const {
  createNilaiSchema,
  updateNilaiSchema
} = require("./nilai-schema");

const validate = require("../../middlewares/validate.middleware");
const { requireAuth } = require("../../middlewares/auth.middleware");
const { requireRole } = require("../../middlewares/role.middleware");
const validateUUIDParam = require("../../middlewares/validateUUID.middleware");
const { wrapAsync } = require("../../utils/handler");

const router = express.Router();

router.get("/", requireAuth, wrapAsync(getAllNilai));
router.get("/:id", requireAuth, validateUUIDParam, wrapAsync(getNilaiById));
router.post("/", requireAuth, requireRole("ADMIN"), validate(createNilaiSchema), wrapAsync(createNilai));
router.put("/:id", requireAuth, requireRole("ADMIN"), validateUUIDParam, validate(updateNilaiSchema), wrapAsync(updateNilai));
router.delete("/:id", requireAuth, requireRole("ADMIN"), validateUUIDParam, wrapAsync(deleteNilai));

module.exports = router;
