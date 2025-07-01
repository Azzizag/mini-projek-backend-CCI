function success(res, data, message = "OK", status = 200) {
  return res.status(status).json({ message, data });
}

function error(res, message = "Something went wrong", status = 500) {
  return res.status(status).json({ message });
}

module.exports = { success, error };
