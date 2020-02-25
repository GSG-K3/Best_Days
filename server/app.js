const express =require('express');
const path =require('path');
const app =express();
const request = require('request');
const errors = require('./controller/error')

app.use(express.static(path.join(__dirname,'..','public'),{maxAge : '30d'}))

app.use(errors.notFound);
app.use(errors.serverErr);

app.listen(3000);