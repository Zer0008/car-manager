var express = require('express');
var router = express.Router();
var User = require('./User');

router.put('/',function (req,res) {
   let email = req.query.email;
     User.updateUser(req.body, email, function(err,count){
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

router.put('/resetPassword',function(req, res){
    let email = req.query.email;
    let password = req.body.password; 
    User.setPasswordUser(email, password, function(err, count){
        if (err){
            res.status(404).json(err);
        } else {
            res.json(req.body);
        }
    });
});

router.get('/:idUser/Notifications', function(req, res){
    let idUser = req.params.idUser ;
    idUser = Number(idUser);
    User.getNotifications(idUser, function(err, rows){
        if (err){
            res.status(404).json(err);
        } else {
            res.json(rows[0]);
        }
    });
});

router.get('/', function(req, res){
    User.getUsers(function(err, rows){
        if (err){
            res.status(404).json(err);
        } else {
            res.json(rows[0]);
        }
    });
});

router.post('/:idUser/Notifications', function(req,res){
    let idUser = req.params.idUser ;
    idUser = Number(idUser);
    User.createNotification(idUser, req.body, function(err, count){
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
                   "idUser": null
           });
       }
    });
});


module.exports = router;
