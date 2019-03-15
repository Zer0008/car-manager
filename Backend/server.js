var app = require('./app');
var port = process.env.PORT || 8000;
let  mysql      = require('mysql');
let connection = mysql.createConnection({
    host     : 'm7nj9dclezfq7ax1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user     : 'h24pj654fy4uazyi',
    password : 'gz689gazfr1vpk4q',
    database : 'no98uoi677luebin'
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
var server = app.listen(port, function() {
    console.log('Express server listening on port ' + port);
    const all_routes = require('express-list-endpoints');
    console.log(all_routes(app));
});

