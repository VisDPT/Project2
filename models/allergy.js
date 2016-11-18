"use strict"; 

module.exports = function(sequelize, DataTypes){
var Allergy = connection.define('Allergy', { 
        AllergyID: {
          type: Sequelize.INTEGER,
          autoIncrement: true,  
          allowNull: false,
          primaryKey: true,
          references: {
            model: 'Recipes',
            key: 'RecipeID'
        	},
          onUpdate: 'cascade',
          onDelete: 'cascade'        	
        },
        Category: {
          type: Sequelize.STRING(20),
          allowNull: false
        },
        FoodAllergy: Sequelize.STRING(30),
        AllergyCheckbox: {
        	type: Sequelize.BOOLEAN,
        	defaultValue: false
        },
        // timestamps: false,
        // ^^^ NEED THIS ^^^ without this, sequelize will create additional columns called 'createAt' and 'updateAt'
        	// 'createAt': timestamp of record created 
        	// 'updateAt': timestamp of record updated 
        // freezeTableName: true // sequelize automatically puralizes table names, this will prevent that from happening
      });
      return Allergy;
      }
