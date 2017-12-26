import express from 'express'
import path from 'path'

const apiRouter = express.Router();
const html = path.resolve('views');

apiRouter.get('/user', function(req, res) {
    res.json({'users': 'hi bye him a'});
});

apiRouter.post('/user', function(req, res) {
    res.json({'users': 'Login Page'});
});

module.exports = apiRouter;