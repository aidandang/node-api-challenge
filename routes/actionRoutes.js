const express = require('express');
const actionController = require('../controllers/actionController');
const actionValidator = require('../middleware/actionValidator');
const router = express.Router();

router
  .route('/:id')
  .get(actionValidator.validateActionId, actionController.readActionById)
  .put(actionValidator.validateAction, actionController.updateActionById)
  .delete(actionValidator.validateActionId, actionController.deleteActionById);

router
  .route('/')
  .post(actionValidator.validateActionWithValidProjectId, actionController.createAction);

module.exports = router;