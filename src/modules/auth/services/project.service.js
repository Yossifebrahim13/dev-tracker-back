// src/modules/projects/services/project.service.js
const ApiError = require("../../../utils/apiErrors");
const { createProject, isProjectExists } = require("../repositories/project.repository");

const createDevProject = async ({ name, clientName, hourlyRate, description, developerId }) => {
  if (!developerId) throw new ApiError(404, "Developer not found");
    const isMatchedProject = await isProjectExists(name , developerId);
    if(isMatchedProject) throw new ApiError(401 ,"this project is Already exists");
  const project = await createProject({ name, clientName, hourlyRate, description, owner: developerId });
  return project;
};

module.exports = { createDevProject };
