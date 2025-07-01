/*
  Warnings:

  - The primary key for the `Kelas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `namaKelas` on the `Kelas` table. All the data in the column will be lost.
  - You are about to drop the column `waliKelas` on the `Kelas` table. All the data in the column will be lost.
  - The primary key for the `Mahasiswa` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Nilai` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `nilaiAngka` on the `Nilai` table. All the data in the column will be lost.
  - You are about to drop the column `nilaiHuruf` on the `Nilai` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `nama` to the `Kelas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wali` to the `Kelas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `huruf` to the `Nilai` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nilai` to the `Nilai` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Mahasiswa" DROP CONSTRAINT "Mahasiswa_kelasId_fkey";

-- DropForeignKey
ALTER TABLE "Nilai" DROP CONSTRAINT "Nilai_mahasiswaId_fkey";

-- AlterTable
ALTER TABLE "Kelas" DROP CONSTRAINT "Kelas_pkey",
DROP COLUMN "namaKelas",
DROP COLUMN "waliKelas",
ADD COLUMN     "nama" TEXT NOT NULL,
ADD COLUMN     "wali" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Kelas_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Kelas_id_seq";

-- AlterTable
ALTER TABLE "Mahasiswa" DROP CONSTRAINT "Mahasiswa_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "kelasId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Mahasiswa_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Mahasiswa_id_seq";

-- AlterTable
ALTER TABLE "Nilai" DROP CONSTRAINT "Nilai_pkey",
DROP COLUMN "nilaiAngka",
DROP COLUMN "nilaiHuruf",
ADD COLUMN     "huruf" TEXT NOT NULL,
ADD COLUMN     "nilai" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "mahasiswaId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Nilai_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Nilai_id_seq";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- AddForeignKey
ALTER TABLE "Mahasiswa" ADD CONSTRAINT "Mahasiswa_kelasId_fkey" FOREIGN KEY ("kelasId") REFERENCES "Kelas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nilai" ADD CONSTRAINT "Nilai_mahasiswaId_fkey" FOREIGN KEY ("mahasiswaId") REFERENCES "Mahasiswa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
