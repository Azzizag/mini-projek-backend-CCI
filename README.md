# 📘 Mini Project - Manajemen Mahasiswa

Sistem backend REST API untuk mengelola data Mahasiswa, Kelas, dan Nilai menggunakan:

* **Node.js** + **Express.js**
* **Prisma ORM** + **PostgreSQL**
* **JWT Authentication**
* **Joi Validation**
* **Domain Driven Design (DDD)**
* **Insomnia Collection** untuk dokumentasi & testing

---

## 🚀 Fitur

* Autentikasi Login dan Register
* CRUD Kelas
* CRUD Mahasiswa (relasi ke Kelas)
* CRUD Nilai (relasi ke Mahasiswa)
* Validasi UUID dan Role-based Authorization
* Insomnia export YAML untuk pengujian langsung

---

## 🧩 Teknologi

| Komponen  | Teknologi  |
| --------- | ---------- |
| Runtime   | Node.js    |
| Framework | Express.js |
| DB        | PostgreSQL |
| ORM       | Prisma     |
| Auth      | JWT        |
| Validasi  | Joi        |
| Testing   | Insomnia   |

---

## ⚙️ Setup

1. **Clone Repo**
2. **Install dependencies**

```bash
npm install
```

3. **Buat file `.env`**

```env
PORT=3000
DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/namadb
JWT_SECRET=your_jwt_secret
```

4. **Generate Prisma Client & Migrate**

```bash
npx prisma generate
npx prisma migrate dev --name init
```

5. **Seed Admin User**

```bash
node prisma/see.js
```

6. **Run Project**

```bash
npm run dev
```

---

## 🔐 Autentikasi

* POST `/auth/login`
* Header: `Authorization: Bearer <token>`

---

## 📂 Endpoint Dokumentasi

### 🔹 Kelas

| Method | Endpoint    | Keterangan       |
| ------ | ----------- | ---------------- |
| GET    | /kelas      | List semua kelas |
| GET    | /kelas/\:id | Detail kelas     |
| POST   | /kelas      | Tambah kelas     |
| PUT    | /kelas/\:id | Edit kelas       |
| DELETE | /kelas/\:id | Hapus kelas      |

### 🔹 Mahasiswa

| Method | Endpoint        | Keterangan           |
| ------ | --------------- | -------------------- |
| GET    | /mahasiswa      | List semua mahasiswa |
| GET    | /mahasiswa/\:id | Detail mahasiswa     |
| POST   | /mahasiswa      | Tambah mahasiswa     |
| PUT    | /mahasiswa/\:id | Edit mahasiswa       |
| DELETE | /mahasiswa/\:id | Hapus mahasiswa      |

### 🔹 Nilai

| Method | Endpoint    | Keterangan       |
| ------ | ----------- | ---------------- |
| GET    | /nilai      | List semua nilai |
| GET    | /nilai/\:id | Detail nilai     |
| POST   | /nilai      | Tambah nilai     |
| PUT    | /nilai/\:id | Edit nilai       |
| DELETE | /nilai/\:id | Hapus nilai      |

---

## 🧪 Pengujian API via Insomnia

1. Buka Insomnia → `Import` → `From File`
2. Pilih file `insomnia_export.yaml`
3. Cek folder:

   * **AUTH Request** → register, login
   * **Mahasiswa CRUD**
   * **Kelas CRUD**
   * **Nilai CRUD**
4. Setelah login, ambil `token` dan set di Authorization header setiap request

### Contoh header:

```
Authorization: Bearer <TOKEN>
Content-Type: application/json
```

---

## 🛡️ Role Protection

* Hanya `ADMIN` yang bisa akses POST/PUT/DELETE
* Semua route dilindungi `requireAuth`

---

## 📁 Struktur Folder

```
src/
├── config/
├── domains/
│   ├── auth/
│   ├── kelas/
│   ├── mahasiswa/
│   └── nilai/
├── middlewares/
├── utils/
├── app.js
└── server.js
```

---

## 👨‍💻 Developer

```
Nama: Azziz Abdul Ghofur
Divisi: Backend
Mini Project 2025 - Study Group Web Dev
```
