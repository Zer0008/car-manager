var express = require('express');
var router = express.Router();
var AnnnonceVente = require('./AnnonceVente');
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

router.get('/vente',function(req,res){
    AnnnonceVente.getAnnonceIntervention(function(err, rows){
        if (err) {
            res.status(404).json(err);
        } else {
            res.json(rows[0]);
        }
    });
});

module.exports = router;