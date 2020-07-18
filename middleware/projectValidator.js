const Project = require('../data/helpers/projectModel');

exports.validateProjectId = async (req, res, next) => {
  const {id} = req.params;
  try {
    const project = await Project.get(id);
    if (project) {
      req.project = {...project};
      next();
    } else {
      res.status(404).json({
        status: "fail",
        message: "The project doesn't not exist."
      })
    }
  }
  catch(err) {
    res.status(500).json({
      error: "The server is currently unable to handle this request."
    })
  }
};

exports.validateProject = (req, res, next) => {
  const project = {...req.body};

  if (Object.keys(project).length > 0) {
    if ((project.name) && (project.description)) {
      next();
    } else {
      res.status(400).json({
        status: "fail",
        message: "Invalid request, name and description fields are required."
      })
    }
  }
  else {
    res.status(400).json({
      status: "fail",
      message: "Invalid request, missing project data."
    })
  }   
}