const jwt = require("jsonwebtoken");
const ApiError = require("../utils/apiErrors");
const Developer = require("../modules/auth/models/developer.model");

const protect = async (req, res, next) => {
  let token;


  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new ApiError(401, "You are not logged in"));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const developer = await Developer.findById(decoded.id).select("-password");
    if (!developer) {
      return next(new ApiError(401, "User no longer exists"));
    }

    req.user = developer; 
    next();
  } catch (err) {
    next(new ApiError(401, "Invalid or expired token"));
  }
};

const auth  = (req , res , next) => {
    const user = req.user.role; 
    if(user != "admin"){
        return next(new ApiError(403 , "You do not have permission to perform this action"))
    }
    next();
}

module.exports = { protect  , auth};
