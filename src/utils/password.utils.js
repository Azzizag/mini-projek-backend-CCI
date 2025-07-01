// src/utils/password.utils.js
const bcrypt = require("bcrypt");
const config = require("../config/env");

async function hashPassword(plainPassword) {
  return await bcrypt.hash(plainPassword, config.bcrypt.saltRounds);
}

async function verifyPassword(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}

module.exports = {
  hashPassword,
  verifyPassword,
};
