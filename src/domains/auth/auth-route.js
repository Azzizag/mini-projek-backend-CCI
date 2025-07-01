// src/domains/auth/auth-route.js
const express = require("express");
const { handleRegister, handleLogin } = require("./auth-controller");
const { registerSchema, loginSchema } = require("./auth-schema");
const validate = require("../../middlewares/validate.middleware");
const { requireAuth } = require("../../middlewares/auth.middleware");

const router = express.Router();

router.get("/some-protected-endpoint", requireAuth, (req, res) => {
  res.json({ message: "You are authorized!", user: req.user });
});
router.post("/register", validate(registerSchema), handleRegister);
router.post("/login", validate(loginSchema), handleLogin);

module.exports = router;
