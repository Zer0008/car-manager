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
    },

    createIntervention : function(idGarage, idPanne, intervention, callback){
        console.log(intervention);
        console.log(idGarage + " " + idPanne);
        libelleIntervetion = intervention.libelleIntervetion ;
        justificatifIntervention = intervention.justificatifIntervention ;
        dateDebutIntervention = intervention.dateDebutIntervention ;
        dateFinIntervention = intervention.dateFinIntervention ;
        var sql = "select createIntervention(?,?,?,?)" ;
        console.log("requete " + sql + " Envoyée !!!");
        return db.query(sql, [idGarage, idPanne, libelleIntervetion, justificatifIntervention, 
            dateDebutIntervention, dateFinIntervention
         ], callback);
    },

    createCar: function(email, voiture, callback){
        console.log(email);
        console.log(voiture);
        immatriculation = voiture.immatriculation ; 
        libelleVoiture = voiture.libelleVoiture ; 
        marqueVoiture = voiture.marqueVoiture ; 
        modeleVoiture = voiture.modeleVoiture ; 
        anneeCirculation = voiture.anneeCirculation ; 
        finition = voiture.finition ;					
         justificatif = voiture.justificatif ; 
         photo = voiture.photo ;
         carburant = voiture.carburant ;
         boiteVitesse = voiture.boiteVitesse ; 
         moteur_type = voiture.moteur_type ;
         moteur_cylindree = voiture.moteur_cylindree ; 
         moteur_emissionC02 = voiture.moteur_emissionC02 ; 
         transmission_type = voiture.transmission_type ;
        transmission_nbRapports = voiture.transmission_nbRapports ; 
          transmission_pneumatique = voiture.transmission_pneumatique ; 
          mesures_0a100 = voiture.mesures_0a100 ;
          mesures_masseAVide = voiture.mesures_masseAVide ;
           mesures_capaciteNomCoffre = voiture.mesures_capaciteNomCoffre ; 
           mesures_capaciteMaxCoffre = voiture.mesures_capaciteMaxCoffre ;
           consommation_urbaine = voiture.consommation_urbaine ;
           consommation_extraUrbaine = voiture.consommation_extraUrbaine ; 
           statut = voiture.statut ;
           visibilite = voiture.visibilite ; 
           isActive = voiture.isActive ;
        var sql = "select createVehiculeProprietaire(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
        console.log("requete " + sql + " Envoyée !!!");
        return db.query(sql,[email, immatriculation, libelleVoiture, marqueVoiture, modeleVoiture, anneeCirculation, finition,					
            justificatif, photo, carburant, boiteVitesse, moteur_type, moteur_cylindree, moteur_emissionC02, 
            transmission_type, transmission_nbRapports, transmission_pneumatique, mesures_0a100, mesures_masseAVide,
            mesures_capaciteNomCoffre, mesures_capaciteMaxCoffre, consommation_urbaine,	consommation_extraUrbaine, 
            statut, visibilite, isActive],callback);
    }
    
};

module.exports = Car;