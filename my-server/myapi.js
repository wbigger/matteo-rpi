var express = require('express');

var app = express();

app.use(express['static'](__dirname ));

// Express route for incoming requests for a customer name
app.get('/data', function(req, res) {
	var returnString = "<h1> 225 </h1>";
	res.status(200).send(returnString);
}); 

// Express route for any other unrecognised incoming requests
app.get('*', function(req, res) {
	res.status(404).send('Unrecognised API call');
});

// Express route to handle errors
app.use(function(err, req, res, next) {
	if (req.xhr) {
		res.status(500).send('Oops, Something went wrong!');
	} else {
		next(err);
	}
});

app.listen(3000);
console.log('App Server running at port 3000');
