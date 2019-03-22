var express = require('express');
var router = express.Router();
var User = require('./User');

router.put('/',function (req,res) {
   let email = req.query.email;
   console.log(email);
     User.updateUser(req.body, email, function(err,count){
         if (err){
             console.log(err);
             res.status(400).json(err);
         }
         console.log(count);
        console.log('update ' + email);
        count = JSON.parse(JSON.stringify(count));
        key = Object.keys(count[0])[0];
        console.log(count[0][key]);
        count = count[0][key];
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


module.exports = router;
