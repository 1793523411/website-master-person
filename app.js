const express = require('express')
var path = require('path');
const bodyParser = require('body-parser')

var indexRouter = require('./routers/index');
const cors = require('cors')

var app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', indexRouter);

app.listen('3333', () => {
    console.log('listen····')
})