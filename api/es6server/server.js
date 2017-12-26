import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import path from 'path';

import routes from './../routes/router';
import apiRoutes from './../routes/api_router';
import adminRoutes from './../routes/admin_router';
import authRoutes from './../routes/auth_router';

import cors from './../middleware/cors';
import dotenv from 'dotenv';
//import middleware from './middlewares/validateRequest'

const app = express ();
dotenv.config ();
const html = path.resolve ('views');
app.set ('port', process.env.PORT || 9080);

// For logs
app.use (logger ('dev'));

// Accept json data or encoded data
app.use (bodyParser.json ());
app.use (bodyParser.urlencoded ({extended: true}));

// Allow Cros origin
app.all ('/*', (req, res, next) => 
 {
  // CORS headers
  res.header ('Access-Control-Allow-Origin', '*');
  res.header ('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

  // Set custom header for CORS
  res.header (
    'Access-Control-Allow-Headers',
    'Authorization,Content-type,Accept,X-Access-Toke,X-Key'
  );
  if (req.method == 'OPTIONS') {
    res.status (200).end ();
  } else {
    next ();
  }
});

// Middle Ware authentications
// app.all('/api/*', [middleware]);

// Includes routes files
app.use ('/', routes);
app.use ('/api/v1', apiRoutes);
app.use ('/auth/v1', authRoutes);
app.use ('/admin/v1', adminRoutes);
app.use ((req, res, next) => {
  res.sendFile (`${html}/404error.html`);
});

// Set templeting
app.set ('view', __dirname + '/views');

// Server Configuration
const server = app.listen (app.get ('port'), () => {
  console.log ('Listening port at http://%s:%s', '127.0.0.1', app.get ('port'));
});
