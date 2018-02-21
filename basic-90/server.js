var express = require('express');
var path =  require('path');

var PORT = 8080;

var app=express()

app.use('/scripts', express.static(path.join(__dirname, './scripts')));
app.use('/styles', express.static(path.join(__dirname, './styles')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/landing', function (req,res){
	res.sendFile(path.join(__dirname + '/landing.html'));
});

app.listen(PORT);

console.log('Running on port ' + PORT);
