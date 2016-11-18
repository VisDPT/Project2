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
        classMethods: {
            associate: function(models) {
              Allergy.belongsToMany(models.Recipe, {
                through: 'AllergyRecipe'
                }
              }
        }
      });
      return Allergy;
      }
