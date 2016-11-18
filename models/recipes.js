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
        classMethods: {
             associate: function(models) {
              Recipe.belongsToMany(models.Allergy, {through: 'RecipeAllergy'})
              }
            }
        }
      });
      return Recipes;
}