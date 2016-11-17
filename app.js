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
                args: [3, 15], // argument for len is to make it between 3 and 15 characters 
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
).then(function() {
    ///table.create({
    //   props
    // })

    //==================================================
    // ========== INSERT NEW RECIPES===============
    //=================================================


    //====================== SWEET POTATO LENTIL=======================
    return models.Recipes.create({
            RecipeName: "Sweet Potato & Lentil Soup",
            CategoryID: 30,
            AllergyID:
        }),

        return models.Allergy.create({
                AllergyID: ,
                Category: 30,
                FoodAllergy: none
            }),

            // return models.AllergyCheckbox.create({
            //     AllergyID: ,
            //     UserID: ,
            //     AllergyCheckbox: 
            // })

            return models.RecipeCategory.create({
                    CategoryID: 30,
                    RecipeCategory: Soups
                }),

                return models.Ingredients.create({
                        Qty01: "2 tbsp",
                        Ingred01: "grape seed oil",
                        Qty02: "1",
                        Ingred02: "onion",
                        Qty03: "2",
                        Ingred03: "garlic",
                        Qty04: "2",
                        Ingred04: "carrots",
                        Qty05: "1.5 C",
                        Ingred05: "red split lentils",
                        Qty06: "6-8 C",
                        Ingred06: "water",
                        Qty07: "2",
                        Ingred07: "sweet potatoes",
                        Qty08: "2 tsp",
                        Ingred08: " ground cumin",
                        Qty09: "1 tsp",
                        Ingred09: "turmeric",
                        Qty10: "1 tbsp",
                        Ingred10: "sea salt"
                    }),
                    return models.Steps.create({
                            Steps01: "1. Heat the oil over medium heat in a large soup pot. Add the onion and cook until it softens, about 5 minutes.",
                            Steps02: "2. Add the garlic and carrots and cook, stirring for a few minutes.",
                            Steps03: "Add the lentils, water, sweet potatoes, spices and seasoning. Stir and bring to a boil. Then, reduce the heat, cover and simmer for about 20 minutes until the lentils and sweet potatoes are tender.",
                            Steps04: "Taste and adjust seasoning. Stir in the cilantro or parsley just before serving.",
                            Steps05: "",
                            Steps06: "",
                            Steps07: "",
                            Steps08: "",
                            Steps09: "",
                            Steps10: "",
                            Temp: ,
                            Time: "",
                            Yeild: ""
                        }),
                        //====================== KALE CHIPS=======================
                        return models.Recipes.create({
                                RecipeName: "Kale Chips",
                                CategoryID: 25,
                                AllergyID:
                            }),

                            return models.Allergy.create({
                                    AllergyID: ,
                                    Category: 25,
                                    FoodAllergy: none
                                }),

                                // return models.AllergyCheckbox.create({
                                //     AllergyID: ,
                                //     UserID: ,
                                //     AllergyCheckbox: 
                                // })

                                return models.RecipeCategory.create({
                                        CategoryID: 25,
                                        RecipeCategory: Appetizer
                                    }),

                                    return models.Ingredients.create({
                                            Qty01: "3 bunches",
                                            Ingred01: "kale",
                                            Qty02: "2.25 cups",
                                            Ingred02: "cashews",
                                            Qty03: "1.5 cups",
                                            Ingred03: "water",
                                            Qty04: "2 cloves",
                                            Ingred04: "garlic",
                                            Qty05: "0.5 cups",
                                            Ingred05: "onion powder",
                                            Qty06: ".5 tsp",
                                            Ingred06: "black pepper",
                                            Qty07: "",
                                            Ingred07: "",
                                            Qty08: "",
                                            Ingred08: "",
                                            Qty09: "",
                                            Ingred09: "",
                                            Qty10: "",
                                            Ingred10: ""
                                        }),
                                        return models.Steps.create({
                                                Steps01: "1. Remove kale ribs (save for juicing or just eat whole as crunchy snacks). Tear the leaves into large pieces, approximately the size of your palm. Wash thoroughly and spin dry.",
                                                Steps02: "2. Drain cashews. In a high-speed blender, blend with the remaining ingredients. The final product should be smooth and creamy and resemble a thick dressing. In a large mixing bowl, thoroughly coat the kale pieces with the cream.",
                                                Steps03: "3. On a dehydrator tray (see below for oven instructions) fitted with teflex or parchment paper, place coated kale, leaving enough room for air to circulate around them. For this recipe it’s best to have at least a full 9-tray dehydrator to accommodate all the chips, skipping every other level so the chips do not get crushed.",
                                                Steps04: "4. Dehydrate overnight for at least 13 hours until kale pieces are crisp and light. ",
                                                Steps05: "5. If you don’t have a dehydrator, preheat an oven to 350 degrees Fahrenheit. Line a non-insulated cookie sheet with parchment paper. Bake until the edges are brown, but not burnt—10 to 15 minutes. ",
                                                Steps06: "6. They will keep in an airtight container for a week at room temperature.",
                                                Steps07: "",
                                                Steps08: "",
                                                Steps09: "",
                                                Steps10: "",
                                                Temp: ,
                                                Time: "",
                                                Yeild: ""
                                            }),
                                            // adding catch function to help with error handling 
                                            // error will be passed to the catch handler where we can do something with it 
}).catch(function(error) {
    console.log(error);

});


// to update an EXISTING table: