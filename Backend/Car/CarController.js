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