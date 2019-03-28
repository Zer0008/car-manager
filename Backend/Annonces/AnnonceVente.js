var db = require('../config/db');

var AnnonceVente = {
    getAnnonceVente: function(callback){
        var sql = "CALL getListeAnnonceVentes()";
        console.log("requete " + sql + " Envoyée !!!");
        return db.query(sql, [], callback);
    },

    createAnnonceVente: function(idVehicule, annonceVente, callback){
        datePublication = new Date() ;
        idVehicule = Number(idVehicule);
        libelleAnnonceVente = annonceVente.libelleAnnonceVente;
        descriptifAnnonceVente = annonceVente.descriptifAnnonceVente ;
        prixVente = annonceVente.prixVente ;
        photo = annonceVente.photo ;
        kilometrage = annonceVente.kilometrage;
        ville = annonceVente.ville ;
        var sql = "select createAnnonceVente(?,?,?,?,?,?,?,?)";
        console.log("requete " + sql + " Envoyée !!!");
        return db.query(sql, [idVehicule, datePublication, libelleAnnonceVente, descriptifAnnonceVente,
        prixVente, ville, photo, kilometrage], callback);
    }
}

module.exports = AnnonceVente;