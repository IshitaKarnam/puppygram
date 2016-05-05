var express = require('express');
var path = require('path');

var app = express();
app.use('/node_modules',express.static(__dirname + '/node_modules'));
app.use('/src',express.static(__dirname + '/src'));
app.use('/images.json',function(req,res,next){
    res.sendFile('images.json',{root:__dirname});
});
app.all('/*',function(req,res,next){
    res.sendFile('index.html',{root:__dirname});
});
app.listen(8000, function () {
    console.log('server running on port 8000');
});