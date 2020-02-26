const express =require('express');
const path =require('path');
const app =express();
const request = require('request');
const errors = require('./controller/error');
const getData = require('../database/queries/getdata');
const postData = require('../database/queries/postdata');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'..','public')))

app.get('/date',(req , response)=>
   getData((err,res)=>{
       if(err){ console.log('server err')}
       else {response.send(res)}

       

   }))

   
app.post('/postaction', (req , res)=>{
    const reqBody =req.body;
    console.log('ggggg',reqBody);
     postData(reqBody);
    res.redirect('/');
})
app.use(errors.notFound);
app.use(errors.serverErr);

app.listen(3000);