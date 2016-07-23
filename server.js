//server.js
'use strict';

var express = require('express'),
    app = express(),
    server;

// Constants
var PORT = 3000;


app.get('/', function(req, res) {
    res.send('Deploy From Travis CI \n');
});
exports.close = function() {
    server.close(function() {
        console.log('Server Closed')
    });
};
app.listen(PORT);
console.log('Running on http://localhost:' + PORT);



