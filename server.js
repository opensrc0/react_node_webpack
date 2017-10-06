const express = require('express');
const app = express();

app.get('/', function(req, res) {
    // res.status(301).redirect('/sign-in');
    res.json({'users': 'hi bye'});
});

const server = app.listen(8081, function() {
    const port = server.address().port;    
    console.log("Example app listening at http://%s:%s", 'http://127.0.0.1', port);
});