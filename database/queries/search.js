const connection = require('../config/connection');

const searchData = (reqbody, cb)=>{

    
    connection.query(`select event_name, note, event_date from calender where event_date = '${reqbody.date}'`, (err,res)=>{
        if(err){
            console.log('hi again, there is error',err );
            return cb(err);
        }
        else {
            console.log('3333333333333333333', res.rows)
            return cb(null , res.rows)
        }
    })
}
module.exports = searchData;