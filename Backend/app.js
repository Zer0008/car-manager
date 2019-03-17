var express = require('express');
var app = express();
var UserController = require('./User/UserController');
var AuthController = require('./User/auth');
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');
//var passport = require('passport');
var cookieParser = require('cookie-parser');
const multer = require('multer');
var fs = require('fs');
var mkdirp = require('mkdirp');


const DIR = './uploads/carte_grise';

try {
      fs.statSync('./uploads/carte_grise');
      console.log('Directory exists');
    }
catch (err) {
if (err.code === 'ENOENT') {
    mkdirp('./uploads/carte_grise', function(err) { 
    });
    mkdirp('./uploads/interventions', function(err) { 
    });
}
}
var storage = multer.diskStorage({
	destination: function(req, file, callback) {
		callback(null,DIR )
	},
	filename: function(req, file, callback) {
    //console.log(file)
    
    // définir le nom du fichier, comment faire pour définir le nom dans le backend avec le libellé
    const name= file.fieldname + '-' + Date.now() + path.extname(file.originalname);
    console.log(name)
		callback(null,name )
	}
})

app.options('*', cors());
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

let upload = multer({storage: storage});

app.use(express.static(path.join(__dirname, '/dist/Frontend')));
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/api/user', UserController);
app.use('/auth', AuthController);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/Frontend/index.html'));
});
app.get('/api', function (req, res) {
    res.end('file catcher example');
  });
   
app.post('/api/upload',upload.single('photo'), function (req, res) {
      if (!req.file) {
          console.log("No file received");
          return res.send({
            success: false
          });
      
        } else {
          console.log('file received');
          return res.send({
            success: true
          })
        }
  });
app.use(bodyParser.urlencoded({
    extended: true
}));

module.exports = app;
