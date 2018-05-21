var express 	= require('express');
var bodyParser 	= require('body-parser');
var request 	= require('request');
var url 		= require('url');
var os 			= require('os');
var app 		= express();


app.listen(3000, '127.0.0.1', () => {
	console.log("Server Started");
})