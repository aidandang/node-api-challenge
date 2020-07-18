const Project = require('../data/helpers/projectModel');
const Action = require('../data/helpers/actionModel');

exports.validateActionId = async (req, res, next) => {
  const {id} = req.params;
  try {
    const action = await Action.get(id);
    if (action) {
      req.action = {...action};
      next();
    } else {
      res.status(404).json({
        status: "fail",
        message: "The action doesn't not exist."
      })
    }
  }
  catch(err) {
    res.status(500).json({
      error: "The server is currently unable to handle this request."
    })
  }
};

exports.validateAction = async (req, res, next) => {
  const {id} = req.params;
  const action = {...req.body};

  if (Object.keys(action).length > 0) {

    if (action.project_id) {
      const actions = await Project.getProjectActions(project_id);
      if (actions.length > 0) {
        if (actions.find(action => action.id == id)) {
          next();
        } else {
          res.status(400).json({
            status: "fail",
            message: "Invalid request, there is no action with provided project_id."
          })
        }
      }
    } else {
      res.status(400).json({
        status: "fail",
        message: "Invalid request, there is project_id found."
      })
    }
    
    if ((action.notes) && (action.description)) {
      if (action.description.length <= 128) {
        next();
      }
      else {
        res.status(400).json({
          status: "fail",
          message: "Invalid request, description is up to 128 characters long."
        })
      }
    } else {
      res.status(400).json({
        status: "fail",
        message: "Invalid request, notes and description fields are required."
      })
    }
  }
  else {
    res.status(400).json({
      status: "fail",
      message: "Invalid request, missing action data."
    })
  }   
}