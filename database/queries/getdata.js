const connection = require('../config/connection');
const getdata = (cb)=>{
    connection.queyr(`select * from calender`,(err,res)=>{
        if(err){
            return cb(err);
        }
        else {
            return cb(err , res ,rows)
        }
    })
}
module.exports = getdata;