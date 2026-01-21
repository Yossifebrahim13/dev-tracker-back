const ApiError = require("../../../../utils/apiErrors");
const { createProjectSchema } = require("../../schemas/auth.schema");
const {
  createDevProject,
  completedDevProject,
  getDevProjectArchived,
} = require("../../services/project.service");

const createProjectDev = async (req, res, next) => {
  try {
    const { error } = createProjectSchema.validate(req.body);
    if (error) return next(new ApiError(400, error.details[0].message));

    const { name, clientName, hourlyRate, description } = req.body;
    const developerId = req.user._id;

    const project = await createDevProject({
      name,
      clientName,
      hourlyRate,
      description,
      developerId,
    });

    res.status(201).json({
      status: "success",
      data: project,
      message: "Project created successfully",
    });
  } catch (error) {
    next(error);
  }
};

const completedProjectDev = async (req, res, next) => {
  try {
    const projectId = req.params["id"];
    const developerId = req.user._id;
    const deletedProject = await completedDevProject(developerId, projectId);
    res
      .status(201)
      .json({ message: "project deleted successfully", deletedProject });
  } catch (error) {
    next(error);
  }
};

const getAllArchivedProjects = async (req, res, next) => {
  try {
    const developerId = req.user._id;
    const page = Math.max(0, Number(req.query.page) || 0);
    const limit = 10;

    const archivedProjects = await getDevProjectArchived(
      developerId,
      page,
      limit
    );

    res.status(200).json({
      page,
      limit,
      count: archivedProjects.length,
      archivedProjects,
    });
  } catch (error) {
    next(error);
  }
};


module.exports = {
  createProjectDev,
  completedProjectDev,
  getAllArchivedProjects,
};
