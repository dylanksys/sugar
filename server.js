var express = require ('express');

var candyland = require('../routers/candyland');

var app = express();

app.use('/', candyland);

app.listen(1337, function () {
	console.log('sugar listening on port 1337');
};
