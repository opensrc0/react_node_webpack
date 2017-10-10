const express = require('express');

const apirouter = express.Router();

apirouter.get('/', function(req, res) {
    res.json({'users': 'hi bye him a'});
});

apirouter.get('/login', function(req, res) {
    res.json({'users': 'Login Page'});
});

module.exports = apirouter;