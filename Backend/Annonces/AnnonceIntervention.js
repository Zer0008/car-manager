var db = require('../config/db');

var AnnonceIntervention = {
    getAnnonceIntervention: function(callback){
        var sql = "call getListeAnnoncePannesSansInterv()";
        console.log("requete " + sql + " Envoyée !!!");
        return db.query(sql, callback);
    },
    
    createAnnonceIntervention: function(immatriculation, Intervention, callback){
        datePublication = Intervention.datePublication ;
        libelleAnnonce = Intervention.libelleAnnonce ;
        libelleAnnonce = Intervention.descriptifAnnonce ;
        var sql = "select createAnnoncePanne(?,?,?)";
        console.log("requete " + sql + " Envoyée !!!");
        return db.query(sql, [immatriculation, datePublication, libelleAnnonce, descriptifAnnonce], callback);
    }
}

module.exports = AnnonceIntervention;  
