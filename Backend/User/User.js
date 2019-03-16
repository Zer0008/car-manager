let db = require('../database');

var User = {
    getUser: function (profil, email, mdp, id, callback) {
        if(id){
            let req = "";
            return db.query(req);
        }else {
            let req = "";
            return db.query(req);
        }
    },
    createUser: function (callback) {
        return db.query();
    }
};

module.exports = User;