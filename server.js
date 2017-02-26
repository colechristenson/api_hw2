//Cole Christenson

var express = require('express')
var app = express()

//Function that will take req and return JSON with messages, queries, and headers
function make_return_json(req){
	var temp_json = {'Messages': [],
					 'Queries': req.query,       //adds queries into return json even if empty
					 'Headers': req.headers};   //adds headers into return json

	temp_json['Messages'].push(req.method + ' request acknowledged'); //tells user what the request type is

	if(Object.keys(req.query).length === 0) //if query is empty add message no queries
	 	temp_json['Messages'].push('No queries');

	return temp_json;
}

//For correct GET requests to /gets
app.get('/gets', function(req, res){
	var temp_json = make_return_json(req);
	res.json(temp_json);
});

//for proper POST requests to /posts
app.post('/posts', function(req, res){
	var temp_json = make_return_json(req);
	res.json(temp_json);
});

//for proper PUT request to /puts
app.put('/puts', function(req, res){
	var temp_json = make_return_json(req);
	res.json(temp_json);
});

//for proper DELETE request to /deletes
app.delete('/deletes', function(req, res){
	var temp_json = make_return_json(req);
	res.json(temp_json);
});

//for any request to base URL request and gives status 405
app.all('/', function(req, res){
	res.status(405);
	res.send('Cannot ' + req.method +' request ' + req.protocol + '://' + req.get('host') + '/hw2');
});

//for any improper request to bad originalUrl (extention)
//ie Put to /gets will return status 405 and message saying cannot do that
app.all('/:non_access' , function(req, res){
	res.status(405);
	res.send('Cannot ' + req.method + ' request ' + req.protocol + '://' + req.get('host') + '/hw2' + req.originalUrl);
});

app.listen(); //listens for request