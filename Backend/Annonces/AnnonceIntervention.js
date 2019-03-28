var db = require('../config/db');

var AnnonceIntervention = {
    getAnnonceIntervention: function(callback){
        var sql = "call getListeAnnoncePannesSansInterv()";
        console.log("requete " + sql + " Envoyée !!!");
        return db.query(sql, callback);
    },
    
    createAnnonceIntervention: function(idVehicule, annonceIntervention, callback){
        idVehicule = Number(idVehicule);
        datePublication = annonceIntervention.datePublication ;
        libelleAnnonce = annonceIntervention.libelleAnnonce ;
        descriptifAnnonce = annonceIntervention.descriptifAnnonce ;
        ville = annonceIntervention.ville ;
        var sql = "select createAnnoncePanne(?,?,?,?,?)";
        console.log("requete " + sql + " Envoyée !!!");
        return db.query(sql, [idVehicule, datePublication, libelleAnnonce, descriptifAnnonce, ville], callback);
    }
}

module.exports = AnnonceIntervention;  
