const express = require('express');
const { createProjectDev, completedProjectDev, getAllArchivedProjects } = require('../controllers/projectcontroller/project');
const { protect } = require('../../../middlewares/auth.middleware');
const projectRouter = express.Router();
projectRouter.post('/dev/projectdev/createprojectdev' , protect , createProjectDev); 
projectRouter.patch('/dev/projectdev/archiveprojectdev/:id' , protect , completedProjectDev)
projectRouter.get('/dev/projectdev/archivedprojects/history'  , protect , getAllArchivedProjects)
module.exports = {projectRouter}