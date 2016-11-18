"use strict"; 

module.exports = function(sequelize, DataTypes){
var Recipes = connection.define('Recipes', { 
        RecipeID: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true, // not null built into this 
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
          onUpdate: 'cascade',
          onDelete: 'cascade'            
        },
        StepsID: {
          type: Sequelize.STRING(50), 
          references: {
              model: 'Steps',
              key: 'StepsID'
            },
          onUpdate: 'cascade',
          onDelete: 'cascade'            
        },
        CategoryID: {
          type: Sequelize.INTEGER,
          allowNull: false, 
          references: {
            model: 'RecipeCategory',
            key: 'CategoryID'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'         
        }, 
        AllergyID: {
          type: Sequelize.INTEGER, 
          allowNull: false,
          references: {
            model: 'Allergy',
            key: 'AllergyID'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'         
        }, 
        // timestamps: false,
        // ^^^ NEED THIS ^^^ without this, sequelize will create additional columns called 'createAt' and 'updateAt'
          // 'createAt': timestamp of record created 
          // 'updateAt': timestamp of record updated 
        // freezeTableName: true // sequelize automatically puralizes table names, this will prevent that from happening
      });
      return Recipes;
}