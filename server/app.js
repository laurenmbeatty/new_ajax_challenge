var express = require('express');

var colors = require('../models/colors.json');

var app = express();



app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response){
    console.log("This is working!");
    response.sendFile(__dirname + '/public/views/index.html');
});

app.get('/getColors', function(request, response){
    console.log("Colors");
    response.send(colors);
});



var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('Listening on port: ', port);
});

module.exports = app;