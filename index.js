const { Model } = require('objection')
const express = require('express')
const path = require('path')
const knex = require('knex');

const knexConfig = require('./config')
const userRouter = require('./api/controller/userController')

const knexInstance = knex(knexConfig)
Model.knex(knexInstance)

const app = express()
app.use(express.json())

const publicDir = path.join(__dirname, '/public')
const viewsDir = path.join(__dirname, '/api/views')
app.set("views", viewsDir);
app.set("view engine", "ejs");
app.use(express.static(publicDir))

app.use(userRouter)

app.listen(8000, () => { 
  console.log('Server is running on localhost:8000...')
})
