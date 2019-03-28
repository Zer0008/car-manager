var express = require('express');
var router = express.Router();
var Car = require('./Car');

router.get('/cars',function (req,res) {
   let email = req.query.email;
   let statut = req.query.statut;
    Car.getCarByMail(email, statut, function (err,rows) {
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows[0]);
        }
    })
});

router.put('/transfertVehicule', function(req, res){
let idAcheteur = Number(req.query.idAcheteur);
let idVendeur = Number(req.query.idVendeur) ;
let idVehicule = Number(req.query.idVehicule);
    Car.transfertCar(idAcheteur, idVendeur, idVehicule, new Date(), req.body, function(err, count){
        if (err){
            console.log(err);
            res.status(400).json(err);
        }
        count = JSON.parse(JSON.stringify(count));
        key = Object.keys(count[0])[0];
        count = count[0][key];
        if(count === 1){
            res.json({'response': idAcheteur});
        } else {
            res.json({
                "response": count
            });
        }
    });
});

router.get('/car/:idVehicule',function (req,res) {
    let idVehicule = Number(req.params.idVehicule) ;
     Car.getVehicule(idVehicule, function (err,rows) {
         if(err) {
             res.status(400).json(err);
         }
         else
         {
             res.json(rows[0]);
         }
     })
 });

 router.put('/car/:idVehicule', function(req, res){
    let idVehicule = Number(req.params.idVehicule) ;
     Car.updateCar(idVehicule, req.body, function (err,rows) {
        if (err){
            console.log(err);
            res.status(400).json(err);
        }
        count = JSON.parse(JSON.stringify(count));
        key = Object.keys(count[0])[0];
        count = count[0][key];
        if(count !== 0){
            res.json(req.body);
        } else {
            res.json({
                "messsage": "la mise a jour n'a pas ete effectuee "
            });
        }
     })
 });

router.post('/cars',function(req,res){
    let email = req.query.email;
    Car.createCar(email, req.body, function(err,count){
        if (err){
            console.log(err);
            res.status(400).json(err);
        }
        count = JSON.parse(JSON.stringify(count));
        key = Object.keys(count[0])[0];
        count = count[0][key];
        if(count != 0){
            res.json(req.body);
        } else {
            res.json({
                "idVehicule":null
            });
        }
    });
});

router.post('/cars/:idVehicule/panne', function(req, res){
    let idVehicule = Number(req.params.idVehicule) ;
    let idTypePanne = Number(req.query.idTypePanne) ;
    Car.createPanneByUser(idTypePanne, idVehicule, function(err, count){
        if (err){
            console.log(err);
            res.status(400).json(err);
        }
        count = JSON.parse(JSON.stringify(count));
        row = JSON.parse(JSON.stringify(count));
        key = Object.keys(count[0])[0];
        count = count[0][key];
        if(count != 0){
            res.json({'idPanne': count});
        } else {
           res.status(404).json({'message': 'immpossible de creer une panne'});
        }
    });
});

router.get('/TypePanne', function(req,res){
 Car.getTypePannes(function(err, rows){
    if(err) {
        res.status(400).json(err);
    }
    else
    {
        res.json(rows[0]);
    }
 });
});


router.get('/car/:idVehicule/interventions',function (req,res) {
    let idVehicule = Number(req.params.idVehicule) ;
    console.log('controller ' + idVehicule);
     Car.getInterventions(idVehicule, function (err,rows) {
         if(err) {
             res.status(400).json(err);
         }
         else
         {
             res.json(rows[0]);
         }
     })
 });

 router.post('/car/:idPanne/interventions',function (req,res) {
    let idPanne = Number(req.params.idPanne) ;
    let idGarage = Number(req.query.idGarage) ;
    console.log('controller ' + idPanne);
    if (idGarage == undefined){
        Car.createIntervention(null, idPanne, req.body, function (err,count) {
            if (err){
                console.log(err);
                res.status(400).json(err);
            }
            count = JSON.parse(JSON.stringify(count));
            key = Object.keys(count[0])[0];
            count = count[0][key];
            if(count != 0){
                res.json(req.body);
            } else {
                res.json({
                    "immatriculation":null
                });
            }
         })
    }
 });

 router.delete('/car/interventions/:idIntervention',function (req,res) {
    let idIntervention = Number(req.params.idIntervention) ;
    Car.deleteIntervention(idIntervention, function(err, count){
        if (err){
            console.log(err);
            res.status(400).json(err);
        }
        count = JSON.parse(JSON.stringify(count));
        key = Object.keys(count[0])[0];
        count = count[0][key];
        if(count != 0){
            res.json({'idIntervention': idIntervention});
        } else {
            res.status(404).json({'message': 'erreur rencontrée lors de la suppression'});
        }
    });
 });


 

module.exports = router;