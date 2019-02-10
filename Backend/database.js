let  mysql      = require('mysql');
let connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'CarLife'
});
module.exports=connection;