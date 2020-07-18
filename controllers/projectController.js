const Project = require('../data/helpers/projectModel');
const Action = require('../data/helpers/actionModel');

exports.readProjects = async (req, res) => {
  try {
    const projects = await Project.get();

    if (projects.length > 0) {
      res.status(200).json({
        status: "success",
        projects
      })
    } else {
      res.status(404).json({
        status: "fail",
        message: "No projects found."
      })
    }
  }
  catch(err) {
    res.status(500).json({
      error: "The server is currently unable to handle this request."
    })
  }
}

exports.readProjectById = (req, res) => {
  res.status(200).json({
    status: "success",
    project: req.project
  })
}

exports.createProject = async (req, res) => {
  try {
    const newProject = await Project.insert(req.body);
    res.status(201).json({
      status: "success",
      project: newProject
    });
  }
  catch(err) {
    res.status(500).json({
      error: "The server is currently unable to handle this request."
    })
  }
}

exports.updateProjectById = async (req, res) => {
  try {
    const updateProject = await Project.update(req.params.id, req.body);
    res.status(200).json({
      status: "success",
      project: updateProject
    });
  }
  catch(err) {
    res.status(500).json({
      error: "The server is currently unable to handle this request."
    })
  }
}

exports.deleteProjectById = async (req, res) => {
  try {
    await Project.remove(req.params.id)
    res.status(200).json({
      status: "success",
      message: "The project is removed from the database."
    });
  }
  catch(err) {
    res.status(500).json({
      error: "The server is currently unable to handle this request."
    })
  }
}

exports.readActionsByProjectId = async (req, res) => {
  try {
    const actions = await Action.get();

    if (actions.length > 0) {
      res.status(200).json({
        status: "success",
        actions
      })
    } else {
      res.status(404).json({
        status: "fail",
        message: "No actions found."
      })
    }
  }
  catch(err) {
    res.status(500).json({
      error: "The server is currently unable to handle this request."
    })
  }
};
