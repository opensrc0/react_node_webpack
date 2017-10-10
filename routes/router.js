const express = require('express');

const router = express.Router();

router.get('/', function(req, res) {
    response.sendFile(__dirname+'/home.html');
});

router.get('/home', function(req, res) {
    response.sendFile(__dirname+'/home.html');
});

router.get('/login', function(req, res) {
    response.sendFile(__dirname+'/login.html');
});

router.get('/register', function(req, res) {
    response.sendFile(__dirname+'/register.html');
});

router.get('/aboutus', function(req, res) {
    response.sendFile(__dirname+'/aboutus.html');
});

router.get('/profile', function(req, res) {
    response.sendFile(__dirname+'/profile.html');
});

module.exports = router;