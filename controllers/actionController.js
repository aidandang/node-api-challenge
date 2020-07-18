const Action = require('../data/helpers/actionModel');

exports.readActionById = (req, res) => {
  res.status(200).json({
    status: "success",
    action: req.action
  })
}

exports.updateActionById = async (req, res) => {
  try {
    const updateAction = await Action.update(req.params.id, req.body);
    res.status(204).json({
      status: "success",
      action: updateAction
    });
  }
  catch(err) {
    res.status(500).json({
      error: "The server is currently unable to handle this request."
    })
  }
}

exports.createAction = async (req, res) => {
  try {
    const newAction = await Action.insert(req.body);
    res.status(201).json({
      status: "success",
      action: newAction
    });
  }
  catch(err) {
    res.status(500).json({
      error: "The server is currently unable to handle this request."
    })
  }
}

exports.deleteActionById = async (req, res) => {
  try {
    await Action.remove(req.params.id)
    res.status(200).json({
      status: "success",
      message: "The action is removed from the database."
    });
  }
  catch(err) {
    res.status(500).json({
      error: "The server is currently unable to handle this request."
    })
  }
}