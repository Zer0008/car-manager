var express = require("express");
var app = express();
var UserController = require("./User/UserController");
var AuthController = require("./User/AuthController");
var mockController = require("./Mock-server/api-mock");
var CarController = require("./Car/CarController");
var passport = require('passport');
var AnnnonceController = require("./Annonces/AnnoncesController");
var bodyParser = require("body-parser");
var path = require("path");
var cors = require("cors");
const multer = require("multer");
var fs = require("fs");
var mkdirp = require("mkdirp");
var cookieParser = require("cookie-parser");
var  DIR = './uploads/carte_grise';
var DIR2 = './uploads/photo';
var DIR3 = './uploads/intervention';
var DIR4 = './uploads/vente' ;

app.use('/', express.static(__dirname + '/'));
app.use(express.static(path.join(__dirname, "/dist/Frontend")));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
app.use(passport.initialize());
app.use("/api/user", UserController);
app.use("/auth", AuthController);
app.use("/api-mock", mockController);
app.use("/api-car", CarController);
app.use("/api-annonces", AnnnonceController);
app.get("/uploads/:folder/:file", cors(), function(req,res){
  path = '/uploads' + '/' + req.params.folder + '/' + req.params.file ;
  console.log("get "+ path);
    res.sendFile(path, function(err){
      if(err){
        res.status(404).json(err);
      } else {
        console.log ('file '+ req.params.file + ' sent ');
      }
    })
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/dist/Frontend/index.html"));
});

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

let urlcartegrise;
let urlintervention;
let urlphoto;
let urlvente;

try {
  fs.statSync("./uploads/carte_grise");
  console.log("Directory exists");
} catch (err) {
  if (err.code === "ENOENT") {
    mkdirp("./uploads/carte_grise", function(err) {});
  }
}

try {
  fs.statSync("./uploads/vente");
  console.log("Directory exists");
} catch (err) {
  if (err.code === "ENOENT") {
    mkdirp("./uploads/vente", function(err) {});
  }
}

try {
  fs.statSync("./uploads/intervention");
  console.log("Directory exists");
} catch (err) {
  if (err.code === "ENOENT") {
    mkdirp("./uploads/intervention", function(err) {});
  }
}

try {
  fs.statSync("./uploads/photo");
  console.log("Directory exists");
} catch (err) {
  if (err.code === "ENOENT") {
    mkdirp("./uploads/photo", function(err) {});
  }
}

var storage_cartegrise = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, DIR);
  },
  filename: function(req, file, callback) {
    console.log(file);
    
    
    const nameCarteGrise = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
     urlcartegrise='/uploads/carte_grise/'+nameCarteGrise
    console.log(urlcartegrise);
    callback(null,nameCarteGrise)
    }
  });

  var storagephoto = multer.diskStorage({
    destination: function(req, file, callback) {
    callback(null,DIR2 )
    },
    filename: function(req, file, callback) {
    console.log(file);
    
   
    const namephoto= file.fieldname + '-' + Date.now() + path.extname(file.originalname);
     urlphoto='/uploads/photo/'+namephoto
    console.log(urlphoto)
    callback(null,namephoto )
    }
  });

  var storageIntervention = multer.diskStorage({
    destination: function(req, file, callback) {
    callback(null,DIR3 )
    },
    filename: function(req, file, callback) {
    console.log(file);
    
   
    const nameIntervention= file.fieldname + '-' + Date.now() + path.extname(file.originalname);
     urlintervention='/uploads/intervention/'+nameIntervention
    console.log(urlintervention);
    callback(null,nameIntervention )
    }
  });

  var storageVente = multer.diskStorage({
    destination: function(req, file, callback) {
    callback(null,DIR4 )
    },
    filename: function(req, file, callback) {
    console.log(file);
    
   
    const namevente= file.fieldname + '-' + Date.now() + path.extname(file.originalname);
     urlvente='/uploads/vente/'+namevente
    console.log(urlvente)
    callback(null,namevente )
    }
  });

let upload = multer({ storage: storage_cartegrise });
let uploadphoto =multer({storage: storagephoto});
let uploadintervention = multer({ storage: storageIntervention});
let uploadvente =multer({storage: storageVente});

app.post('/api/upload/carte_grise',upload.single('file'), function (req, res) {
  if (!req.file) {
      console.log("No file received");
      return res.send({
        success: false
      });

    } else {
      console.log('file received');
      return res.json({
      url: urlcartegrise
      })
    }
});

app.post('/api/upload/vente',uploadvente.single('file'), function (req, res) {
  if (!req.file) {
      console.log("No file received");
      return res.send({
        success: false
      });

    } else {
      console.log('file received');
      return res.json({
       url: urlvente
      })
    }
});

app.post('/api/upload/intervention',uploadphoto.single('file'), function (req, res) {
  if (!req.file) {
      console.log("No file received");
      return res.send({
        success: false
      });

    } else {
      console.log('file received');
      return res.json({
       url : urlintervention
      })
    }
  });

// root pour upload de photo
app.post('/api/upload/photo',uploadphoto.single('photo'), function (req, res) {
  if (!req.file) {
      console.log("No file received");
      return res.send({
        success: false
      });

    } else {
      console.log('file received');
      return res.json({
       url : urlphoto
      })
    }
});

module.exports = app;
