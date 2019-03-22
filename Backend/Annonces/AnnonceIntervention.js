var db = require('../config/db');

var AnnonceIntervention = {
    getAnnonceIntervention: function(callback){
        var sql = "call getListeAnnoncePannesSansInterv()";
        console.log("requete " + sql + " Envoyée !!!");
        return db.query(sql, callback);
    }
}

module.exports = AnnonceIntervention;  
