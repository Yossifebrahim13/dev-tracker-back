class ApiError extends Error {
  constructor(statusCode, messageError) {
    super(messageError);
    this.status = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ApiError; 