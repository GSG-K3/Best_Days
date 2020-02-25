const connection = require('../config/connection');
const postdata = userData =>{
    const { date , note}=userData;
    const sql = {
        text : "INSERT INTO calender (date , note) VALUES ($ , $ );",
        values : [date , note]
    };
    return connection.query(sql);
}

module.exports = postdata