//for using http only not very helpful though

// //get the http and fiesystem modules
// var http = require('http'),
//   fs = require('fs');

// //create our server using the http module
// http.createServer(function(req, res){

// 	//write to our server. set configuration for the response
// 	res.writeHead(200, {
// 		'Content-Type': 'text/html',
// 		'Access-Control-Allow-Origin' : '*'
// 	})


var express = require('express');
var app 	= express();
var path 	= require('path');

//send our index.html file to the user for the home page
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/index.html'));
	console.log(req.method);
});

app.post('/posts', function(req, res){
	res.send('POST request acknowledged')
});



app.listen(1337);
console.log('Use port 1337')
