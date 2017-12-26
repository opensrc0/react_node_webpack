'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _router = require('./../routes/router');

var _router2 = _interopRequireDefault(_router);

var _api_router = require('./../routes/api_router');

var _api_router2 = _interopRequireDefault(_api_router);

var _admin_router = require('./../routes/admin_router');

var _admin_router2 = _interopRequireDefault(_admin_router);

var _auth_router = require('./../routes/auth_router');

var _auth_router2 = _interopRequireDefault(_auth_router);

var _cors = require('./../middleware/cors');

var _cors2 = _interopRequireDefault(_cors);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import middleware from './middlewares/validateRequest'

var app = (0, _express2.default)();
_dotenv2.default.config();
var html = _path2.default.resolve('views');
app.set('port', process.env.PORT || 9080);

// For logs
app.use((0, _morgan2.default)('dev'));

// Accept json data or encoded data
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

// Allow Cros origin
app.all('/*', function (req, res, next) {
  // CORS headers
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

  // Set custom header for CORS
  res.header('Access-Control-Allow-Headers', 'Authorization,Content-type,Accept,X-Access-Toke,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

// Middle Ware authentications
// app.all('/api/*', [middleware]);

// Includes routes files
app.use('/', _router2.default);
app.use('/api/v1', _api_router2.default);
app.use('/auth/v1', _auth_router2.default);
app.use('/admin/v1', _admin_router2.default);
app.use(function (req, res, next) {
  res.sendFile(html + '/404error.html');
});

// Set templeting
app.set('view', __dirname + '/views');

// Server Configuration
var server = app.listen(app.get('port'), function () {
  console.log('Listening port at http://%s:%s', '127.0.0.1', app.get('port'));
});