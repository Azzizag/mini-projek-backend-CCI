// src/domains/auth/auth-service.js
const { signToken } = require("../../utils/jwt");
const { hashPassword, verifyPassword } = require("../../utils/password.utils");

function createAuthService(prisma) {
  async function register({ email, password, role }) {
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) throw new Error("Email already registered");

    const hashed = await hashPassword(password);
    const user = await prisma.user.create({
      data: { email, password: hashed, role },
    });

    return { id: user.id, email: user.email, role: user.role };
  }

  async function login({ email, password }) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await verifyPassword(password, user.password))) {
      throw new Error("Invalid email or password");
    }

    const token = signToken({ id: user.id, email: user.email, role: user.role });
    return { token };
  }

  return { register, login };
}

module.exports = createAuthService;
