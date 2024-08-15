const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');


// GET /tasks?status=In+Progress&priority=High&search=report

router.post('/tasks', auth, taskController.createTask);


router.get('/tasks', auth, taskController.getTasks);


router.put('/tasks/:id', auth, role(['admin']), taskController.updateTask);


router.delete('/tasks/:id', auth, role(['admin']), taskController.deleteTask);

module.exports = router;
