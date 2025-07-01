const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

require("dotenv").config(); // tetap boleh
const config = require("./config/env");

const errorHandler = require("./middlewares/error.middleware");
const notFound = require("./middlewares/notfound.middleware");

const authRoute = require("./domains/auth/auth-route");
const mahasiswaRoute = require("./domains/mahasiswa/mahasiswa-route");
const kelasRoute = require("./domains/kelas/kelas-route");
const nilaiRoute = require("./domains/nilai/nilai-route");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());






// ROUTES
app.use("/auth", authRoute);
app.use("/mahasiswa", mahasiswaRoute);
app.use("/kelas", kelasRoute);
app.use("/nilai", nilaiRoute);

// MIDDLEWARE
app.use(notFound);
app.use(errorHandler);

module.exports = app;
