const ApiError = require("../utils/apiErrors");

const errorMiddleware = (err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message });
  }
  console.error(err);
  res.status(500).json({ message: "Internal Server Error" });
};

module.exports = errorMiddleware;