const { PrismaClient } = require("@prisma/client");
const { hashPassword } = require("../src/utils/password.utils");

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await hashPassword("admin123");

  await prisma.user.create({
    data: {
      email: "admin@admin.com",
      password: hashedPassword,
      role: "ADMIN",
    },
  });

  console.log("Seeded user admin!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());