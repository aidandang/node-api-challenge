const express = require('express');
const actionController = require('../controllers/actionController');
const actionValidator = require('../middleware/actionValidator');
const router = express.Router();

router
  .route('/:id')
  .get(actionValidator.validateActionId, actionController.readActionById)
  .put(actionController.updateActionById)
  .delete(actionController.deleteActionById);

router
  .route('/')
  .post(actionController.createAction);

module.exports = router;