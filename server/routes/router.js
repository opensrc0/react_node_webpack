import express from 'express'
import path from 'path'

const router = express.Router();
const html = path.resolve('views');

router.get('/', function(req, res) {
    res.sendFile(`${html}/home.html`);
});

router.get('/home', function(req, res) {
    res.sendFile(`${html}/home.html`);
});

router.get('/login', function(req, res) {
    res.sendFile(`${html}/login.html`);
});

router.get('/register', function(req, res) {
    res.sendFile(`${html}/register.html`);
});

router.get('/aboutus', function(req, res) {
    res.sendFile(`${html}/aboutus.html`);
});

router.get('/profile', function(req, res) {
    res.sendFile(`${html}/profile.html`);
});

module.exports = router;