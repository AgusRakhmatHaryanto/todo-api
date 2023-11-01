const Model = require('../models')
const Todo = Model.Todo

const getTodo = async (req, res) => {
  try {
    const todos = await Todo.findAll({
      order: [['id', 'ASC']]
    })
    res.json({ data: todos })
  } catch (err) {
    res.status(500).json({ message: 'Gagal mengambil data activity' })
  }
}

const createTodo = async (req, res) => {
  try {
    const { activity } = req.body

    const newTodos = await Todo.create({
      activity
    })
    res.json({ data: newTodos })
  } catch (err) {
    res.status(500).json({ message: 'Gagal menambah data activity' })
  }
}

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params

    const todo = await Todo.findByPk(id)

    if (!todo) {
      return res.status(404).json({ message: 'Data activity tidak ditemukan' })
    }
    await todo.update({ status: 'deleted' })

    res.json({ message: 'Data activity berhasil dihapus' })
  } catch (err) {
    res.status(500).json({ message: 'Gagal menghapus data activity' })
  }
}

module.exports = { getTodo, createTodo, deleteTodo }
