let  mysql      = require('mysql');
let db = mysql.createConnection({
    host     : 'm7nj9dclezfq7ax1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user     : 'h24pj654fy4uazyi',
    password : 'gz689gazfr1vpk4q',
    database : 'no98uoi677luebin'
});

var User = {
    getUserAuth: function (email, mdp, statut, callback) {
        console.log('niveau get ' + email + ' '+ mdp + ' ' + statut);
        var sql;
        if(statut === 'Particulier'){
            sql = "call getParticulier(?,?)" ;
        }else {
            sql = " ";
        }
        console.log("requete " + sql + " Envoyée !!!");
        return db.query(sql,[email, mdp],callback);       
    },
    createUser: function (user,callback) {
        idUser = user.idUser ;
        email = user.email ;
        password = user.password;
        telephone = user.telephone;
        numeroRue = user.numeroRue;
        libelleRue = user.libelleRue;
        codePostal = user.codePostal;
        ville = user.ville;
        nom = user.nom;
        let req = '';
        console.log('Utilisateur de type ' + user.statut);
        if(user.statut === 'Particulier') {
            req = "select createParticulier(?,?,?,?,?,?,?,?)";
        }
        return db.query(req,[email, password, telephone, numeroRue, libelleRue, codePostal, ville, nom],callback);
    },
    updateUser: function(user, email, callback){
        console.log('update user');
        console.log(user);
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
        return db.query(req,[email, new_email, password, nom, telephone, numeroRue, libelleRue, codePostal, ville],callback);
    }
};

module.exports = User;
