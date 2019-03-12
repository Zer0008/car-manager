var express = require('express');
var router = express.Router();
var User = require('./User');
var passeport = require('passport');
const test  = {
    "idUser": 0,
    "email": "elangal@3il.fr",
    "password": "99820046Ps!",
    "telephone": 5,
    "numeroRue": "ee",
    "libelleRue": "aaaz",
    "codePostal": 87100,
    "ville": "Limoges",
    "name": "ELANGA"
};
router.post('/register', function (req,res) {
    console.log(req.body);
    User.createUser(req.body,function(err,count){
        count = JSON.parse(JSON.stringify(count));
        count = Object.keys(count)[0];
        console.log(count);
        if(count != 0){
            res.json(req.body);
        } else {
            res.json({
                "idUser": null,
                    "email": null,
                    "telephone":  null,
                    "numeroRue": null,
                    "libelleRue": null,
                    "codePostal": null,
                    "ville": null,
                    "nom": null,
                    "statut": null
            });
        }
    });
});

router.post('/signin', function(req, res) {
    console.log(req.body);
     User.getUserAuth(req.body.email, req.body.password, req.body.statut, function(err,result){
         console.log(req.body.email);
         if(err){
             console.log(err);
            res.status(400).json(err);
         }
         else{
             console.log('else');
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
         }
    });
});


module.exports = router;