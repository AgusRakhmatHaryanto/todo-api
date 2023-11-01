const todos = require('./routes/todoRoute.js')
const express = require('express')
const morgan = require('morgan')
const app = express()
require('dotenv').config()
const PORT = process.env.ENVPORT

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('combined'))

app.use(todos)
if(process.env.NODE_ENV != "test"){
    app.listen(PORT, () => {
        console.log(`App listening on http://localhost:${PORT}`)
    })
}
module.exports = app