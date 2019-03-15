var express = require('express');
var router = express.Router();
var User = require('./User');

router.get('/',function (req,res) {
   let email = req.query.email;
   let mdp = req.query.mdp ;
    User.getUser(email, mdp, function (err,rows) {
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
        }
    })
});


module.exports = router;
