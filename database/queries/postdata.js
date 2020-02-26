const connection = require('../config/connection');
const mainPage = require('../../public/getUserData')
const postdata = userData =>{
   console.log('00000000000000000',userData);
    // let myDate =window.location.pathname;
    const today = new Date();
    const event_date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const { event, note } = userData;
    const sql = {
        text:`INSERT INTO calender (event_date , event_name ,note) VALUES ($1, $2, $3);`,
        values : [event_date ,event, note]
    };
     connection.query(sql.text,sql.values,(err,results) => {
         if (err){
             throw err
             
         }
     });
}

module.exports = postdata