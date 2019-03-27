var db = require('../config/db');

var AnnonceVente = {
    getAnnonceIntervention: function(callback){
        var sql = "call getListeAnnonceVentes()";
        console.log("requete " + sql + " Envoyée !!!");
        return db.query(sql, callback);
    }
}

module.exports = AnnonceVente;