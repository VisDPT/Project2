
// create variable to require the sequelize method 
// variable capitalized to show it is a constuctor function 
var Sequelize = require('sequelize'); 

// connection variable will need to have a new operator 
// connecter function will return a new object which will connection the object to the db 
// adding arguments to the connector function, Sequelize():
	// syntax: var varName = new ConnectorName('db_name', 'yourDBuserName', 'yourDBpassword')
var connection = new Sequelize('FoodAllergyDB', 'root', 'testing123'); 

// define models using the sequelized db (FoodAlleryDB) that the connection above returned
// to define the model, use the connection method. This will take two arguments: 
	// 1) the name of the model (or table)
	// 2) an object that repesents the properties of the model (columns and their attibutes)
// syntax:
	// var ConstructorName = connection.define('tableName', {
	// 		col1: Sequelize.STRING,
	// 		col2: Sequelize.TEXT
	// }); 

// associate the pk and fk in tables: 


// constructor for recipes model 
var Recipes = connection.define('recipes', { 
        RecipeID: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true, // not null built into this 
        }, 
        },
        RecipeName: {
        	type: Sequelize.STRING(50), 
        	unique: true // allows only unique string in field when the update stuff for sql runs 
        },
        IngredID: {
        	type: Sequelize.STRING(50), 
        	references: {
            	model: 'Ingredients',
            	key: 'IngredID'
            },
        },
        StepsID: {
        	type: Sequelize.STRING(50), 
        	references: {
            	model: 'Steps',
            	key: 'StepsID'
            },	
        },
        

        CategoryID: {
          type: Sequelize.INTEGER,
          allowNull: false, 
          references: {
            model: 'RecipeCategory',
            key: 'CategoryID'
        	},
        }, 
        AllergyID: {
          type: Sequelize.INTEGER, 
          allowNull: false,
          references: {
            model: 'Allergy',
            key: 'AllergyID'
        	},

        }, 
        {
        timestamps: false,
        // ^^^ NEED THIS ^^^ without this, sequelize will create additional columns called 'createAt' and 'updateAt'
        	// 'createAt': timestamp of record created 
        	// 'updateAt': timestamp of record updated 
        freezeTableName: true // sequelize automatically puralizes table names, this will prevent that from happening
        }
      });

// constructor for allergy model 
var Allergy = connection.define('allergy', { 
        AllergyID: {
          type: Sequelize.INTEGER, 
          allowNull: false,
          primaryKey: true
        },
        Category: {
          type: Sequelize.STRING(20),
          allowNull: false
        },
        FoodAllergy: Sequelize.STRING(30)
      });

// constructor for allergyCheckbox model
var AllergyCheckbox = connection.define('allergyCheckbox', { 
        AllergyID: {
          type: Sequelize.INTEGER, 
          allowNull: false,
          primaryKey: true
        },
        UserID: {
          type: Sequelize.INTEGER, 
          allowNull: false, 
          references: {
          		model: 'Users',
           		key: 'UserID'
       			},
        },
        AllergyCheckbox: Sequelize.BOOLEAN
      });

// constructor for users model 
var Users = connection.define('user', { 
        UserID: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        FirstName: {
          type: Sequelize.STRING(20), 
          allowNull: false 
        },
        LastName: {
          type: Sequelize.STRING(25),
          allowNull: false
        }, 
        email: {
          type: Sequelize.STRING(50),
          allowNull: false
        }, 
        Password: {
          type: Sequelize.STRING(20),
          allowNull: false,
          // this is for validation. 
          	// len is a property that will make sure the characters added will be between 3 and 15 characters, otherwise it will error  
          validate: {
          	len: {
          		args: [3, 15],  // argument for len is to make it between 3 and 15 characters 
          		msg: "Please enter a password between 3 and 15 characters" // will display this error if args are not fulfilled
          	}
          }
        },
   
      });

// constructor for recipeCategory model 
var RecipeCategory = connection.define('recipeCategory', { 
        CategoryID: {
          type: Sequelize.INTEGER, 
          allowNull: false
        }, 
        RecipeCategory: {
          type: Sequelize.STRING(30),
          allowNull: false
        }
      });
    
// constructor for ingredients model 
var Ingredients = connection.define('ingredients', { 

        IngredID: {
          type: Sequelize.INTEGER,
          allowNull: false, 
          primaryKey: true, 
          references: {
            model: 'Recipes',
            key: 'RecipeID'
        	},
        }, 
        Qty01: {
          type: Sequelize.STRING(8),
          allowNull: false 
        },
        Ingred01: {
          type: Sequelize.STRING(30),
          allowNull: false 
        },
        Qty02: Sequelize.STRING(8),
        Ingred02: Sequelize.STRING(30), 
        Qty03: Sequelize.STRING(8),
        Ingred03: Sequelize.STRING(30), 
        Qty04: Sequelize.STRING(8),
        Ingred04: Sequelize.STRING(30), 
        Qty05: Sequelize.STRING(8),
        Ingred05: Sequelize.STRING(30), 
        Qty06: Sequelize.STRING(8),
        Ingred06: Sequelize.STRING(30), 
        Qty07: Sequelize.STRING(8),
        Ingred07: Sequelize.STRING(30), 
        Qty08: Sequelize.STRING(8),
        Ingred08: Sequelize.STRING(30), 
        Qty09: Sequelize.STRING(8),
        Ingred09: Sequelize.STRING(30), 
        Qty10: Sequelize.STRING(8),
        Ingred10: Sequelize.STRING(30)
      }); 

// constructor for steps model 
var Steps = connection.define('steps', { 
        StepsID: {
          type: Sequelize.INTEGER, 
          allowNull: false,
          primaryKey: true,
          references: {
            model: 'Recipes',
            key: 'RecipeID'
        	},
        }, 
        Steps01: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        Steps02: Sequelize.TEXT,
        Steps03: Sequelize.TEXT, 
        Steps04: Sequelize.TEXT,
        Steps05: Sequelize.TEXT,
        Steps06: Sequelize.TEXT,
        Steps07: Sequelize.TEXT,
        Steps08: Sequelize.TEXT,
        Steps09: Sequelize.TEXT,
        Steps10: Sequelize.TEXT,
        Temp: Sequelize.INTEGER, 
        Time: Sequelize.STRING(20), 
        Yield: Sequelize.STRING(30)
      });

// this connection is needed for two things: 
	// 1) syncronizing the modules to the db
	// 2) automatically generates sql to create the tables in the db
// ***will not sync or create tables in db without this function!!!***

// need to add .then to connection.sync() so we can add data to the tables using sequelize.
	// should be easy, but will need to use js promises which can end up being a little ticky***

// syntax (make sure all of these properties (constuctor name and column names) match the model): 
	// connection.sync().then(function () {
		// ModelConstructorName.create({
			// colName1: 'add some text if a string',
			// colName2: 38 // <<< for a string
		// });
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
