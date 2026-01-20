
const Project = require("../schemas/project.schema");

const createProject = async ({ name, clientName, hourlyRate, description, owner }) => {
  return await Project.create({
    name,
    clientName,
    hourlyRate,
    description,
    owner,
  });
};
const isProjectExists  = async (name , ownerId) => {
    const isExists = await Project.findOne({name , owner:ownerId})
    return isExists;
}

module.exports = { createProject , isProjectExists };
