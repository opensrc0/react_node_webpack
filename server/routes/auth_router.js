import express from 'express'
import path from 'path'

const authRouter = express.Router();
const html = path.resolve('views');

authRouter.get('/profile', function(req, res) {
    res.json({'users': 'hi bye him a'});
});

authRouter.post('/account', function(req, res) {
    res.json({'users': 'Login Page'});
});

module.exports = authRouter;