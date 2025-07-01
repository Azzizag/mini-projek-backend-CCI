function createMahasiswaService(prisma) {
  async function create(data) {
    return await prisma.mahasiswa.create({
      data: {
        nama: data.nama,
        nim: data.nim,
        kelasId: data.kelasId
      },
    });
  }

  async function findAll() {
    return await prisma.mahasiswa.findMany({ include: { kelas: true } });
  }

  async function findById(id) {
    return await prisma.mahasiswa.findUnique({
      where: { id },
      include: { kelas: true },
    });
  }

  async function update(id, data) {
    return await prisma.mahasiswa.update({
      where: { id },
      data,
    });
  }

  async function remove(id) {
    return await prisma.mahasiswa.delete({ where: { id } });
  }

  return { create, findAll, findById, update, remove };
}

module.exports = createMahasiswaService;