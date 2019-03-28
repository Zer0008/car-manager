var db = require('../config/db');
var crypto = require('crypto');

var algorithm = 'aes256';
var password = 'l5JmP+G0/1zB%;r8B8?2?2pcqGcL^3';

var User = {
    getUserAuth: function (email, mdp, statut, callback) {
        var sql;
        if(statut === 'Particulier'){
            sql = "call getParticulier(?,?)" ;
        } else if (statut === 'Garage') {
            sql = "call getGarage(?,?)";
        } 
        console.log("requete " + sql + " Envoyée !!!");
        return db.query(sql,[email, mdp],callback);       
    },

    createUser: function (user,callback) {
        idUser = user.idUser ;
        email = user.email ;

        var cipher = crypto.createCipher(algorithm,password);
        var crypted = cipher.update(user.password,'utf8','hex');
        crypted += cipher.final('hex');

        password = crypted;
        telephone = user.telephone;
        numeroRue = user.numeroRue;
        libelleRue = user.libelleRue;
        codePostal = user.codePostal;
        ville = user.ville;
        nom = user.nom;
        let req = '';
        if(user.statut === 'Particulier') {
            req = "select createParticulier(?,?,?,?,?,?,?,?)";
        }
        console.log("requete " + req + " Envoyée !!!");
        return db.query(req,[email, password, telephone, numeroRue, libelleRue, codePostal, ville, nom],callback);
    },

    updateUser: function(user, email, callback){
        console.log('update user');
        new_email = user.email ;
        telephone = user.telephone;
        numeroRue = user.numeroRue;
        libelleRue = user.libelleRue;
        codePostal = user.codePostal;
        password = "Test@12345" ;
        ville = user.ville;
        nom = user.nom;
        let req = '';
        req = "select updateUser(?,?,?,?,?,?,?,?,?)";
        console.log("requete " + req + " Envoyée !!!");
        return db.query(req,[email, new_email, password, nom, telephone, numeroRue, libelleRue, codePostal, ville],callback);
    },

    setPasswordUser: function(email, password, callback){
        let req = 'call setPasswordUser(?,?)' ;
        console.log("requete " + req + " Envoyée !!!");
        return db.query(req,[email, password],callback);
    },

    getNotifications: function(idUser, callback){
        let req = 'call getNotifications(?)' ;
        console.log("requete " + req + " Envoyée !!!");
        return db.query(req, [idUser], callback);
    },

    getUsers: function(callback){
        let req = 'call getParticuliers()' ;
        console.log("requete " + req + " Envoyée !!!");
        return db.query(req, [], callback);
    },

    getPassword: function(email, callback){
        let req = 'select getPasswordUser(?)';
        console.log("requete " + req + " Envoyée !!!");
        return db.query(req, [email], callback);
    },

    createNotification: function(idUser, Notification, callback){
        var d = new Date(Notification.dateNotification);
        idUserRecep = idUser;
        detailNotification = Notification.detailNotification ;
        libelleNotification = Notification.libelleNotification ;
        dateNotification = d ;
        statut = Notification.statut ;
        nonLu =  Notification.nonLu ;
        let req = 'select createNotification(?,?,?,?,?,?)';
        console.log("requete " + req + " Envoyée !!!");
        return db.query(req, [idUserRecep, libelleNotification, detailNotification, dateNotification, statut, nonLu], callback);
    }
};

module.exports = User;
