const express = require('express');
const { createProjectDev } = require('../controllers/projectcontroller/project');
const { protect } = require('../../../middlewares/auth.middleware');
const projectRouter = express.Router();
projectRouter.post('/dev/projectdev/createprojectdev' , protect , createProjectDev); 
module.exports = {projectRouter}