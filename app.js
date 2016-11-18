
// create variable to require the sequelize method 
// variable capitalized to show it is a constuctor function 
var Sequelize = require('sequelize'); 

// connection variable will need to have a new operator 
// connecter function will return a new object which will connection the object to the db 
// adding arguments to the connector function, Sequelize():
	// syntax: var varName = new ConnectorName('db_name', 'yourDBuserName', 'yourDBpassword')
var models = require('./models'); 

// define models using the sequelized db (FoodAlleryDB) that the connection above returned
// to define the model, use the connection method. This will take two arguments: 
	// 1) the name of the model (or table)
	// 2) an object that repesents the properties of the model (columns and their attibutes)
// syntax:
	// var ConstructorName = connection.define('tableName', {
	// 		col1: Sequelize.STRING,
	// 		col2: Sequelize.TEXT
	// }); 

connection.sync(
	// force: true; will allow updating the model attritbutes above when app.js file is run again
		// *** if there are models deleted above, then this will delete them too when run! 
	// logging: console.log; will show sql commands that are run in the terminal 
		// *** if force: true is uncommented, you will also see the update commands for table 
	{
		 force: true,
		logging: console.log   
	}
).then(function () {


// adding catch function to help with error handling 
	// error will be passed to the catch handler where we can do something with it 
}).catch(function (error) {
	console.log(error); 

});


// to update an EXISTING table: 
