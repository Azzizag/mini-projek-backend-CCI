function requireRole(...allowedRoles) {
  return (req, res, next) => {
    const userRole = req.user?.role;
    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({ message: "Forbidden: role tidak diizinkan" });
    }
    next();
  };
}

module.exports = { requireRole };