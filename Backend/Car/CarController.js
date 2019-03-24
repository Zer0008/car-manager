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

router.get('/car/:immatriculation',function (req,res) {
    let immatriculation = req.params.immatriculation ;
     Car.getVehicule(immatriculation, function (err,rows) {
         if(err) {
             res.status(400).json(err);
         }
         else
         {
             res.json(rows[0]);
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
        console.log(count[0][key]);
        count = count[0][key];
        if(count != 0){
            res.json(req.body);
        } else {
            res.json({
                "immatriculation":null
            });
        }
    });
});


router.get('/car/:immatriculation/interventions',function (req,res) {
    let immatriculation = req.params.immatriculation ;
    console.log('controller ' + immatriculation);
     Car.getInterventions(immatriculation, function (err,rows) {
         if(err) {
             res.status(400).json(err);
         }
         else
         {
             res.json(rows[0]);
         }
     })
 });

 

module.exports = router;