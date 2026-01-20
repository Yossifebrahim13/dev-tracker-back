const joi = require("joi");
const registerSchema = joi.object({
  name: joi.string().min(3).max(50).required(),
  email: joi.string().email().required(),
  password: joi.string().min(8).required(),
});


const otpSchema = joi.object({
  otp: joi.number().required(),
  email: joi.string().email().required(),
});

const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(8).required(),
});

const createProjectSchema = joi.object({
  name: joi.string().min(3).max(255).required(),
  clientName: joi.string().min(2).max(255).required(),
  hourlyRate: joi.number().min(0).required(),
  description: joi.string().allow("", null),
});

const updateProjectSchema = joi.object({
  name: joi.string().min(3).max(255),
  clientName: joi.string().min(2).max(255),
  hourlyRate: joi.number().min(0),
  description: joi.string().allow("", null),
  status: joi.string().valid("active", "paused", "completed"),
});

module.exports = { registerSchema , loginSchema , createProjectSchema , updateProjectSchema }; 