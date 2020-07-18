const Action = require('../data/helpers/actionModel');

exports.readActions = (req, res) => {
  try {

  }
  catch(err) {
    res.status(500).json({
      error: "The server is currently unable to handle this request."
    })
  }
}