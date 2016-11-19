// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');



// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080; // this is for heroku setup. Will look for some default env if 8080 is not accessible 

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// static directory
app.use(express.static('app/public'));


// Routes
// =============================================================

// // this is broken: 
// app.get('handlebars', exphbs({
//     defaultLayout: 'MAIN'
// }));


app.get('/views/startbootstrapTemplate/MAIN', function (req,res) {
	res.render('index', {});
});



// Starts the server to begin listening 
// =============================================================
app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
})