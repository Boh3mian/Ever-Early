// TaskRoutes.js
const express = require('express');
const router = express.Router();
const taskService = require('../services/taskService');

router.get('/', taskService.getAllTasks);
router.post('/', taskService.createTask);
router.put('/:id', taskService.updateTask);
router.delete('/:id', taskService.deleteTask);

module.exports = router;
