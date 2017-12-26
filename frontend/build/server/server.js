'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static(__dirname + './../../')); //serves the index.html
app.listen(3000); //listens on port 3000 -> http://localhost:3000/