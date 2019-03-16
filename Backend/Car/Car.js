let  mysql  = require('mysql');
let db = mysql.createConnection({
    host     : 'm7nj9dclezfq7ax1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user     : 'h24pj654fy4uazyi',
    password : 'gz689gazfr1vpk4q',
    database : 'no98uoi677luebin'
});

var Car = {
    getCarByMail: function (email, statut, callback) {
        console.log('niveau get ' + email + ' ' + statut);
        var sql;
        if(statut === 'Particulier'){
            sql = "call getListeVehiculeProprietaire(?)" ;
        }else {
            sql = " ";
        }
        console.log("requete " + sql + " Envoyée !!!");
        return db.query(sql,[email],callback);       
    },
    getInterventions: function(immatriculation,callback){
        console.log(immatriculation);
        var sql = "CALL getListeInterventions(?)";
        console.log("requete " + sql + " Envoyée !!!");
        return db.query(sql,[immatriculation],callback);  
    }
    
};

module.exports = Car;