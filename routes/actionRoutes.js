const express = require('express');
const actionController = require('../controllers/actionController');
const router = express.Router();

router
  .route('/')
  .get(actionController.readActions);

module.exports = router;