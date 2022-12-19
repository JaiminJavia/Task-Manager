const express = require('express');
const router = express.Router();
const {
    getAllTasks,
    updateTasks,
    deleteTasks,
    createTasks,
    getTask} = require('../controllers/tasks');

router.route('/tasks').get(getAllTasks).post(createTasks);
router.route('/:id').get(getTask).patch(updateTasks).delete(deleteTasks);

module.exports = router;
