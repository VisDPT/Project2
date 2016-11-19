"use strict";
module.exports = function(sequelize, DataTypes) {
    var Recipes = sequelize.define('Recipes', {
            RecipeID: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true, // not null built into this 
            },
            RecipeName: {
                type: DataTypes.STRING(50),
                unique: true // allows only unique string in field when the update stuff for sql runs 
            },
            IngredID: {
                type: DataTypes.STRING(50),
                references: {
                    model: 'Ingredients',
                    key: 'IngredID'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            StepsID: {
                type: DataTypes.STRING(50),
                references: {
                    model: 'Steps',
                    key: 'StepsID'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            AllergyID: {
                type: DataTypes.INTEGER,
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
                    //Recipes.belongsTo(models.Allergy, { foreignKey:'AllergyID'} );
                    Recipes.belongsToMany(models.Allergy, { through: 'RecipesAllergy' })
                }
            }
        })
    return Recipes;
    };