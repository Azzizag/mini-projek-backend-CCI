const prisma = require("../../config/db");
const createAuthService = require("./auth-service");
const { success } = require("../../utils/response.helper");

const authService = createAuthService(prisma);

const handleRegister = async (req, res, next) => {
  try {
    const user = await authService.register(req.body);
    return success(res, user, "Registered", 201);
  } catch (err) {
    next(err);
  }
};

const handleLogin = async (req, res, next) => {
  try {
    const result = await authService.login(req.body);
    return success(res, { token: result.token }, "Login successful");
  } catch (err) {
    return next(err);
  }
};

module.exports = { handleRegister, handleLogin };
