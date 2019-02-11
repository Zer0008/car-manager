var express = require('express');
const http = require('http');
var app = express();
var UserController = require('./User/UserController');
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');

app.options('*', cors());
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.static(path.join(__dirname, '/dist/Frontend')));
app.use(bodyParser.json());
app.use('/api-user', UserController);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/Frontend/index.html'));
});

app.use(bodyParser.urlencoded({
    extended: true
}));

module.exports = app;