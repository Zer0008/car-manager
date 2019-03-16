var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    //Rempli ce fichier JSON des informations que l'api est supposée nous retourner
    //En l'occurence les finitions possibles pour un matricule, le modele, l'année etc..
    let matricule = req.query.matricule ;
    let modele = req.query.modele;
    let marque = req.query.marque;
    let annee = req.query.annee;
    let finition = req.query.finition;
    if((matricule!==undefined && finition===undefined) || (modele!==undefined && marque!==undefined && annee!==undefined && finition===undefined)){
        let finitionpossibles = ['1.4 – 90 D-4D Confort', '1.4 – 90 D-4D Excelia', '1.4 – 90 D-4D In',
        '1.4 – 90 D-4D Lounge'];

        res.json(
            {
                "finitions":finitionpossibles
            }
        );
    }
    if(((matricule!==undefined || (modele!==undefined && marque!==undefined && annee!==undefined))) && finition!==undefined){
        let fiche = {
           "Hauteur":1.53,
            "Largeur": 1.695,
            "Longueur":3.785,
            "Type": "Berline",
            "Energie": "Diesel",
            "Puissance_reelle": "66KW(90)",
            "Boite_vitesse": "Boite manuelle",
            "Portes_Places": "5 portes / 5 places",
            "Vitesse maximale": "175Km/h",
            "Cons_moyenne": "4.1 litre /100km",
            "Emission_CO2": "109g/km",
            "Caracteristiques_principales": {
               "Moteur":{
                   "Type": "4 cylindres",
                   "Cylindree": "1364 cm3",
                   "Emission": "109g/km",
               },
                "Transmission":{
                   "Type": "Traction avant",
                    "Nombre_rapport": 6,
                    "Pneumatiques": "185/60 R15"
                }
            }
        };
        res.json(fiche);
    }

});

module.exports = router;