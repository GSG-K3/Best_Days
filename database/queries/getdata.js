const connection = require('../config/connection');

const getdata = (cb)=>{

    let today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    console.log(date);
    connection.query(`select event_name, note, event_date from calender where event_date = '${date}'`, (err,res)=>{
        if(err){
            console.log('hi again, there is error',err );
            return cb(err);
        }
        else {
            console.log('data sent')
            return cb(null , res.rows)
        }
    })
}
module.exports = getdata;