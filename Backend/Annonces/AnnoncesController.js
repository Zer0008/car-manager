var express = require('express');
var router = express.Router();
var AnnonceVente = require('./AnnonceVente');
var AnnonceIntervention = require('./AnnonceIntervention');

router.get('/interventions', function(req, res){
  AnnonceIntervention.getAnnonceIntervention(function(err, rows){
        if (err) {
            res.status(404).json(err);
        } else {
            res.json(rows[0]);
        }
  });
});

router.post('/interventions', function(req,res){
    let immatriculation = req.params.immatriculation ;
    AnnonceIntervention.createAnnonceIntervention(immatriculation, req.body, function(err, count){
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
            res.status(400).json({'message': 'probleme rencontré lors de la creation de lannonce'});
        }
    });
});

router.get('/vente',function(req,res){
    AnnonceVente.getAnnonceVente(function(err, rows){
        if (err) {
            res.status(404).json(err);
        } else {
            res.json(rows[0]);
        }
    });
});

router.post('/vente',function(req,res){
    let immatriculation = req.query.immatriculation ;
    AnnonceVente.createAnnonceVente(immatriculation, req.body, function(err, count){
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
            res.status(400).json({'message': 'probleme rencontré lors de la creation de lannonce'});
        }
    })
});

module.exports = router;