
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

// constructor for recipes model 
var Recipes = connection.define('recipes', { 
        RecipeID: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true, // not null built into this 
        }, 
        RecipeName: {
        	Sequelize.STRING(50), 
        	unique: true // allows only unique string in field when the update stuff for sql runs 
        },
        CategoryID: {
          type: Sequelize.INTEGER,
          allowNull: false
        }, 
        AllergyID: {
          type: Sequelize.INTEGER, 
          allowNull: false
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
        },
        UserID: {
          type: Sequelize.INTEGER, 
          allowNull: false
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

        RecipeID: {
          type: Sequelize.INTEGER,
          allowNull: false
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
        RecipeID: {
          type: Sequelize.INTEGER, 
          allowNull: false
        }, 
        Steps01: {
          type: Sequelize.STRING(30),
          allowNull: false
        },
        Steps02: Sequelize.STRING(30),
        Steps03: Sequelize.STRING(30),
        Steps04: Sequelize.STRING(30),
        Steps05: Sequelize.STRING(30),
        Steps06: Sequelize.STRING(30),
        Steps07: Sequelize.STRING(30),
        Steps08: Sequelize.STRING(30),
        Steps09: Sequelize.STRING(30),
        Steps10: Sequelize.STRING(30),
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
return models.Recipes.create({
    RecipeName: "Green Go Juice"
    CategoryID: 10
    AllergyID:  none
)},

return models.Recipes.create({
    RecipeName: "Rasberry Delight"
    CategoryID: 10
    AllergyID:  none
)},

return models.Recipes.create({
    RecipeName: "Blueberry Brain Booster"
    CategoryID: 10
    AllergyID:  4003
)},

return models.Recipes.create({
    RecipeName: "Orange Surprise"
    CategoryID: 10
    AllergyID:  4003
)},

return models.Recipes.create({
    RecipeName: "Pumpkin Pie on the Go"
    CategoryID: 10
    AllergyID:  4003
)},

return models.Recipes.create({
    RecipeName: "Green Supreme"
    CategoryID: 10
    AllergyID:  none
)},




//==================================================
   // ========== INSERT NEW RECIPES===============
//=================================================


//======================Calming Greens===========================

return models.Allergy.create({
    AllergyID: 
    Category: 10
    FoodAllergy: none  
)},

//return models.AllergyCheckbox.create({
  //  AllergyID: 
  //  UserID: 20
  //  AllergyCheckbox: none  
//)}

return models.RecipeCategory.create({
    CategoryID: 10
    RecipeCategory: 20  
)},

return models.Ingredients.create({
    RecipeID: 
    Qty01: "1",
    Ingred01: "Banana",
    Qty02: "1",
    Ingred02: "Green Grapes",
    Qty03: "1/4",
    Ingred03: "Avocado",
    Qty04: "1/3 C",
    Ingred04: "Cilantro",
    Qty05: "1/4 C",
    Ingred05: "Fresh Mint",
    Qty06: "1 C",
    Ingred06: "Spinach",
    Qty07: "1 1/4",
    Ingred07: "Water",
    Qty08: ,
    Ingred08: ,
    Qty09: ,
    Ingred09: ,
    Qty10: ,
    Ingred10:

)},


return models.Ingredients.create({
        RecipeID: 
        Steps01: "Wash and prep all ingredients.",
        Steps02: "Blend all ingredients"
        Steps03: 
        Steps04: 
        Steps05: 
        Steps06: 
        Steps07: 
        Steps08: 
        Steps09: 
        Steps10: 
        Temp:  
        Time:  
        Yield:
      }),


//=======================Raspberry Rivitalizer=====================

return models.Allergy.create({
    AllergyID: 
    Category: 10
    FoodAllergy: none  
)},

//return models.AllergyCheckbox.create({
  //  AllergyID: 
  //  UserID: 20
  //  AllergyCheckbox: none  
//)}

return models.RecipeCategory.create({
    CategoryID: 10
    RecipeCategory: 20  
)},

return models.Ingredients.create({
    RecipeID: 
    Qty01: "1 C",
    Ingred01: "Kale",
    Qty02: "1 C",
    Ingred02: "Raspberries (frozen)",
    Qty03: "1",
    Ingred03: "Banana (frozen",
    Qty04: "1 tbsp",
    Ingred04: "Coconut butter/Coconut Oil",
    Qty05: "1/2 tsp",
    Ingred05: "Vanilla Extract",
    Qty06: "1 3/4 C",
    Ingred06: "Nondairy milk",
    Qty07: ,
    Ingred07: ,
    Qty08: ,
    Ingred08: ,
    Qty09: ,
    Ingred09: ,
    Qty10: ,
    Ingred10:

)},


return models.Ingredients.create({
        RecipeID: 
        Steps01: "Wash and prepare ingredients.",
        Steps02: "Blend ingredients until desired smoothness"
        Steps03: 
        Steps04: 
        Steps05: 
        Steps06: 
        Steps07: 
        Steps08: 
        Steps09: 
        Steps10: 
        Temp:  
        Time:  
        Yield:
      }),

//=================Brain Booster=================================

return models.Allergy.create({
    AllergyID: 
    Category: 10
    FoodAllergy: 4003 
)},

//return models.AllergyCheckbox.create({
  //  AllergyID: 
  //  UserID: 20
  //  AllergyCheckbox: none  
//)}

return models.RecipeCategory.create({
    CategoryID: 10
    RecipeCategory: 20  
)},

return models.Ingredients.create({
    RecipeID: 
    Qty01: "1/2",
    Ingred01: "Banana (frozen)",
    Qty02: "1 1/2 C",
    Ingred02: "Blueberries (frozen)",
    Qty03: "1 1/2 C",
    Ingred03: "Almond milk/ nondairy milk",
    Qty04: "2 tbsp",
    Ingred04: "Chopped walnuts",
    Qty05: "1 C",
    Ingred05: "Kale",
    Qty06: "1/2 tsp",
    Ingred06: "Ground Cinnamon",
    Qty07: ,
    Ingred07: ,
    Qty08: ,
    Ingred08: ,
    Qty09: ,
    Ingred09: ,
    Qty10: ,
    Ingred10:

)},


return models.Ingredients.create({
        RecipeID: 
        Steps01: "Wash and prepare ingredients.",
        Steps02: "Blend all ingredients"
        Steps03: 
        Steps04: 
        Steps05: 
        Steps06: 
        Steps07: 
        Steps08: 
        Steps09: 
        Steps10: 
        Temp:  
        Time:  
        Yield:
      }),


//==================Orange Dream================================

return models.Allergy.create({
    AllergyID: 
    Category: 10
    FoodAllergy: 4003 
)},

//return models.AllergyCheckbox.create({
  //  AllergyID: 
  //  UserID: 20
  //  AllergyCheckbox: none  
//)}

return models.RecipeCategory.create({
    CategoryID: 10
    RecipeCategory: 20   
)},

return models.Ingredients.create({
    RecipeID: 
    Qty01: "1",
    Ingred01: "Orange(peeled/seeds removed)",
    Qty02: "1",
    Ingred02: "Banana (frozen)",
    Qty03: "1/2 tsp",
    Ingred03: "Vanilla Extract/ powder",
    Qty04: "1/8 C",
    Ingred04: "Raw cashews",
    Qty05: "1 1/2 C",
    Ingred05: "Nondairy milk",
    Qty06: ,
    Ingred06: ,
    Qty07: ,
    Ingred07: ,
    Qty08: ,
    Ingred08: ,
    Qty09: ,
    Ingred09: ,
    Qty10: ,
    Ingred10:

)},


return models.Ingredients.create({
        RecipeID: 
        Steps01: "Wash and prepare ingredients.",
        Steps02: "Blend all ingredients"
        Steps03: 
        Steps04: 
        Steps05: 
        Steps06: 
        Steps07: 
        Steps08: 
        Steps09: 
        Steps10: 
        Temp:  
        Time:  
        Yield:
      }),

//================Pumpkin Pie Spice============================

return models.Allergy.create({
    AllergyID: 
    Category: 10
    FoodAllergy: 4003 
)},

//return models.AllergyCheckbox.create({
  //  AllergyID: 
  //  UserID: 20
  //  AllergyCheckbox: none  
//)}

return models.RecipeCategory.create({
    CategoryID: 10
    RecipeCategory: 20  
)},

return models.Ingredients.create({
    RecipeID: 
    Qty01: "1 C",
    Ingred01: "pumpkin puree",
    Qty02: "1",
    Ingred02: "Banana (frozen)",
    Qty03: "1 1/2 C",
    Ingred03: "Almond milk/ nondairy milk",
    Qty04: "1/2 tsp",
    Ingred04: "pumpkin pie spice",
    Qty05: "1/2 tsp",
    Ingred05: "vanilla extract",
    Qty06: "1 tbsp",
    Ingred06: "almond butter",
    Qty07: ,
    Ingred07: ,
    Qty08: ,
    Ingred08: ,
    Qty09: ,
    Ingred09: ,
    Qty10: ,
    Ingred10:

)},


return models.Ingredients.create({
        RecipeID: 
        Steps01: "Wash and prepare ingredients.",
        Steps02: "Blend all ingredients"
        Steps03: 
        Steps04: 
        Steps05: 
        Steps06: 
        Steps07: 
        Steps08: 
        Steps09: 
        Steps10: 
        Temp:  
        Time:  
        Yield:
      }),


//===================Green Smoothie==============================

return models.Allergy.create({
    AllergyID: 
    Category: 10
    FoodAllergy: none  
)},

//return models.AllergyCheckbox.create({
  //  AllergyID: 
  //  UserID: 20
  //  AllergyCheckbox: none  
//)}

return models.RecipeCategory.create({
    CategoryID: 10
    RecipeCategory: 20  
)},

return models.Ingredients.create({
    RecipeID: 
    Qty01: "2",
    Ingred01: "Bananas",
    Qty02: "2",
    Ingred02: "Medium oranges",
    Qty03: "1",
    Ingred03: "Apple (cubed)",
    Qty04: "1 C",
    Ingred04: "Spinach",
    Qty05: "1/2 C",
    Ingred05: "Water",
    Qty06: "1 tbsp",
    Ingred06: "lemon juice",
    Qty07: "1 pinch",
    Ingred07: "cinnamon",
    Qty08: ,
    Ingred08: ,
    Qty09: ,
    Ingred09: ,
    Qty10: ,
    Ingred10:

)},


return models.Ingredients.create({
        RecipeID: 
        Steps01: "Wash and prepare ingredients.",
        Steps02: "Blend all ingredients"
        Steps03: 
        Steps04: 
        Steps05: 
        Steps06: 
        Steps07: 
        Steps08: 
        Steps09: 
        Steps10: 
        Temp:  
        Time:  
        Yield:
      }),





// adding catch function to help with error handling 
	// error will be passed to the catch handler where we can do something with it 
}).catch(function (error) {
	console.log(error); 

});


// to update an EXISTING table: 
