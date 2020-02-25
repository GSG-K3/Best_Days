const express =require('express');
const path =require('path');
const app =express();
const request = require('request');
const errors = require('./controller/error');
const getData = require('../database/queries/getdata')
const postData = require('../database/queries/postdata')

app.use(express.static(path.join(__dirname,'..','public'),{maxAge : '30d'}))
app.get('/:date',(req , res)=>
   getData((req,res)=>{
       if(err){ console.log('server err')}
       else {response.send(res)}

   }))
   
app.post('/:event', (req , res)=>{
    postData((req , res)=>{
        console.log(req.note)
    })
})
app.use(errors.notFound);
app.use(errors.serverErr);

app.listen(3000);