import express from 'express'
import express from 'body-parser'
import express from 'morgan'
import path from 'path'
import routes from './../routes/router'
import apiRoutes from './../routes/apirouter'
import dotenv from'dotenv'

const app = express();
dotenv.config();

app.set('port', process.env.PORT || 9080);

// Accept json data or encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// Includes routes files 
app.use('/', routes);
app.use('/api', apiRoutes);

// Set templeting
app.set('view', __dirname + '/views');

// Server Configuration
const server = app.listen(app.get('port'), () => {
    console.log("Listening port at http://%s:%s", '127.0.0.1', app.get('port'));
});