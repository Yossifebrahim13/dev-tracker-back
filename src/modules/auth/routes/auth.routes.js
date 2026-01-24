const express = require("express");
const {register  , creatAccount }= require("../controllers/authcontrollers/register");
const login = require("../controllers/authcontrollers/login");
const regRouter = express.Router();
regRouter.post('/dev/register/registerdevs', register);
regRouter.post('/dev/register/creatdevacc' ,  creatAccount)
regRouter.post('/dev/login/logindevs' , login)
module.exports = regRouter; 
