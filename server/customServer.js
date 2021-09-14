const express = require('express')
const bodyParser = require('body-parser')
const consign = require('consign')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

consign()
    .include('rest')
    .into(app)

module.exports = app;

