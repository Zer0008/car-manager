let  mysql      = require('mysql');
let db = mysql.createConnection({
    host     : 'm7nj9dclezfq7ax1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user     : 'h24pj654fy4uazyi',
    password : 'gz689gazfr1vpk4q',
    database : 'no98uoi677luebin'
});

module.exports = db ;