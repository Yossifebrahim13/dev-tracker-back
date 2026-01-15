const bcrypt = require("bcrypt");

const generateOTP = (length = 6) => {
  const digits = "123456789";
  let otp = "";
  for (let i = 0; i < length; i++) {
    otp += digits[Math.floor(Math.random() * digits.length)];
  }
  return otp;
};

const hashOtp = async (otp) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(otp, salt);
};

const compareOtp = (otp, hashed) => {
  return bcrypt.compare(otp, hashed);
};


module.exports = {generateOTP , hashOtp , compareOtp};