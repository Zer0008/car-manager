var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var User = require('./User');

router.get('/:id',function (req,res) {
    id = req.params['id'];
    User.getUser(id, function (err,rows) {
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
        }
    })
});

router.post('/', function (req,res) {
    User.createUser(req.body,function(err,count){
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.json(req.body);
        }
    });
});

module.exports = router;