function createNilaiService(prisma) {
  async function create(data) {
    return await prisma.nilai.create({
      data: {
        mataKuliah: data.mataKuliah,
        nilai: data.nilai,
        huruf: data.huruf,
        mahasiswaId: data.mahasiswaId,
      },
    });
  }

  async function findAll() {
    return await prisma.nilai.findMany({ include: { mahasiswa: true } });
  }

  async function findById(id) {
    return await prisma.nilai.findUnique({ where: { id }, include: { mahasiswa: true } });
  }

  async function update(id, data) {
    return await prisma.nilai.update({ where: { id }, data });
  }

  async function remove(id) {
    return await prisma.nilai.delete({ where: { id } });
  }

  return { create, findAll, findById, update, remove };
}

module.exports = createNilaiService;