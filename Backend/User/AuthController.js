var express = require('express');
var router = express.Router();
var User = require('./User');
var crypto = require('crypto');
var algorithm = 'aes256';
var password = 'l5JmP+G0/1zB%;r8B8?2?2pcqGcL^3';

router.post('/register', function (req,res) {
    User.createUser(req.body,function(err,count){
        if (err) {
            res.status(404).json(err);
        }
        count = JSON.parse(JSON.stringify(count));
        key = Object.keys(count[0])[0];
        count = count[0][key];
        if(count != 0){
            res.json(req.body);
        } else {
            res.json({
                    "email": null,
            });
        }
    });
});

router.get('/password/', function(req,res){
    let email = req.query.email ;
    User.getPassword(email, function(err, count){
        if(err){
            console.log(err);
           res.status(400).json(err);
        } else {
            count = JSON.parse(JSON.stringify(count));
            key = Object.keys(count[0])[0];
            count = count[0][key];
            res.json({'password': count});
        }
    });
});

router.post('/signin', function(req, res) {

    var cipher = crypto.createCipher(algorithm,password);
    var crypted = cipher.update(req.body.password,'utf8','hex');
    crypted += cipher.final('hex');

     User.getUserAuth(req.body.email, crypted, req.body.statut, function(err,result){
         if(err){
             console.log(err);
            res.status(400).json(err);
         }
         else{
             console.log('else');
              if (req.body.statut == 'Particulier'){
                return res.json(
                    {
                        "idUser": result[0][0].idUser,
                        "email": result[0][0].email,
                        "telephone":  result[0][0].telephone,
                        "numeroRue": result[0][0].numeroRue,
                        "libelleRue": result[0][0].libelleRue,
                        "codePostal": result[0][0].codePostal,
                        "ville": result[0][0].ville,
                        "nom": result[0][0].nom,
                        "statut": req.body.statut
                    } 
                );
              } else if (req.body.statut == 'Garage') {
                return res.json(
                    {
                        "email": result[0][0].email,
                        "nom": result[0][0].nom,
                        "telephone":  result[0][0].telephone,
                        "numeroRue": result[0][0].numeroRue,
                        "libelleRue": result[0][0].libelleRue,
                        "codePostal": result[0][0].codePostal,
                        "ville": result[0][0].ville,
                        "numSIREN": result[0][0].numSIREN,
                        "numNIC":  result[0][0].numnic,
                        "statut": req.body.statut
                    } 
                );
              }
         }
    });
});


module.exports = router;