import express from 'express'
import path from 'path'

const adminRouter = express.Router();
const html = path.resolve('views');

adminRouter.get('/profile', function(req, res) {
    res.json({'users': 'hi bye him a'});
});

adminRouter.post('/dashboard', function(req, res) {
    res.json({'users': 'Login Page'});
});

module.exports = adminRouter;