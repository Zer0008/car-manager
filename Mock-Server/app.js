// ICI SE TROUVE NOTRE MOCKSERVER QUI A POUR BUT DE SIMULER L'ACTION DE L'API QUI NOUS RETOURNE LES INFORMATIONS SUR UN VEHICULE A PARTICR DE SON MATRICULE OU CERTAINS CRITERES
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var api = require('./routes/api');
var app = express();

app.options('*', cors());
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({ error: err })
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
});

module.exports = app;