"use strict"; 

module.exports = function(sequelize, DataTypes){

var Ingredients = connection.define('Ingredients', { 

        IngredID: {
          type: Sequelize.INTEGER,
          allowNull: false, 
          primaryKey: true, 
          references: {
            model: 'Recipes',
            key: 'RecipeID'
        	},
          onUpdate: 'cascade',
          onDelete: 'cascade'        	
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
        Ingred10: Sequelize.STRING(30), 
        // timestamps: false,
        // ^^^ NEED THIS ^^^ without this, sequelize will create additional columns called 'createAt' and 'updateAt'
        	// 'createAt': timestamp of record created 
        	// 'updateAt': timestamp of record updated 
        // freezeTableName: true // sequelize automatically puralizes table names, this will prevent that from happening
      }); 
      return Ingredients;
}
Add Comment