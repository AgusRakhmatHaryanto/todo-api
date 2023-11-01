const express = require('express')
const router = express.Router()
const todos = require('../controllers/todoController.js')

router.get('/api/todo', todos.getTodo)
router.post('/api/todo', todos.createTodo)
router.delete('/api/todo/:id', todos.deleteTodo)

module.exports = router
