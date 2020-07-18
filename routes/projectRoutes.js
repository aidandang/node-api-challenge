const express = require('express');
const projectController = require('../controllers/projectController');
const projectValidator = require('../middleware/projectValidator');
const router = express.Router();

router
  .route('/')
  .get(
    projectController.readProjects
  )
  .post(
    projectValidator.validateProject, 
    projectController.createProject
  );

router
  .route('/:id')
  .get(
    projectValidator.validateProjectId, 
    projectController.readProjectById
  )
  .put(
    projectValidator.validateProject, 
    projectValidator.validateProjectId, 
    projectController.updateProjectById
  )
  .delete(
    projectValidator.validateProjectId,
    projectController.deleteProjectById
  );

router
  .route('/:id/actions')
  .get(
    projectValidator.validateProjectId,
    projectController.readActionsByProjectId
  )

module.exports = router;