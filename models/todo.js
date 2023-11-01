'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    static associate (models) {
    }
  }
  Todo.init({
    activity: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Todo',
    timestamps: false
  })
  return Todo
}
