const ApiError = require("../../../../utils/apiErrors");

const { registerSchema } = require("../../schemas/auth.schema");
const {registerdev, otpToCreatAcc} = require("../../services/auth.service");

const register = async (req, res, next) => {
  try {
    const { error } = registerSchema.validate(req.body);
    if (error) return next(new ApiError(400, error.details[0].message));

    const { name, email, password } = req.body;
    const otpMessage = await registerdev(name, email, password);

    res.status(201).json({
      otpMessage
    });
  } catch (err) {
    next(err);
  }
};

const creatAccount = async (req , res , next) => {
  try {
    const{otp  , email}  = req.body; 
    const developer = await otpToCreatAcc(otp , email);
    res.status(200).json({
      message: 'user created',
      _id: developer._id,
      email: developer.email,
      name: developer.name
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {register , creatAccount}; 