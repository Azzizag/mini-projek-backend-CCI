// src/middlewares/error.middleware.js
function errorHandler(err, req, res, next) {
  console.error(err); // log dulu
  res.status(500).json({ error: err.message || "Internal Server Error" });
}

module.exports = errorHandler;
