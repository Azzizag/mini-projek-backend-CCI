// src/middlewares/notfound.middleware.js
function notFound(req, res, next) {
  res.status(404).json({ message: "Endpoint not found" });
}

module.exports = notFound;
