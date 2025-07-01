function createKelasService(prisma) {
  async function create(data) {
    return await prisma.kelas.create({
      data: {
        nama: data.nama,
        wali: data.wali,
      },
    });
  }

  async function findAll() {
    return await prisma.kelas.findMany();
  }

  async function findById(id) {
    return await prisma.kelas.findUnique({ where: { id } });
  }

  async function update(id, data) {
    return await prisma.kelas.update({
      where: { id },
      data: {
        nama: data.nama,
        wali: data.wali,
      },
    });
  }

  async function remove(id) {
    return await prisma.kelas.delete({ where: { id } });
  }

  return { create, findAll, findById, update, remove };
}

module.exports = createKelasService;