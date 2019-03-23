var express = require('express');
var app = express();
var UserController = require('./User/UserController');
var AuthController = require('./User/AuthController');
var mockController = require('./Mock-server/api-mock');
var CarController  = require ('./Car/CarController');
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');
//var passport = require('passport');
const multer = require('multer');
var fs = require('fs');
var mkdirp = require('mkdirp');
var cookieParser = require('cookie-parser');
var  DIR = './uploads/carte_grise';


app.use(express.static(path.join(__dirname, '/dist/Frontend')));
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors()) ;
app.use('/api/user', UserController);
app.use('/auth', AuthController);
app.use('/api-mock',mockController);
app.use('/api-car',CarController);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/Frontend/index.html'));
});

app.use(bodyParser.urlencoded({
    extended: true
}));

try {
  fs.statSync('./uploads/carte_grise');
  console.log('Directory exists');
}
catch (err) {
if (err.code === 'ENOENT') {
mkdirp('./uploads/carte_grise', function(err) { 
});
}
}

try {
fs.statSync('./uploads/interventions');
console.log('Directory exists');
}
catch (err) {
if (err.code === 'ENOENT') {
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

let upload = multer({storage: storage});

app.get('/api/upload', function (req, res) {
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

module.exports = app;
