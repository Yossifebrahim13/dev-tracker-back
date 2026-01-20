const ApiError = require("../../../../utils/apiErrors");
const { createProjectSchema } = require("../../schemas/auth.schema");
const { createDevProject } = require("../../services/project.service");

const createProjectDev = async (req, res, next) => {
  try {
    const { error } = createProjectSchema.validate(req.body);
    if (error) return next(new ApiError(400, error.details[0].message));

    const { name, clientName, hourlyRate, description } = req.body;
    const developerId = req.user._id;

    const project = await createDevProject({ name, clientName, hourlyRate, description, developerId });

    res.status(201).json({
      status: "success",
      data: project,
      message: "Project created successfully",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createProjectDev };
