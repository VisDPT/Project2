"use strict";

module.exports = function(sequelize, DataTypes) {

    var Ingredients = connection.define('Ingredients', {

            IngredID: {
                type: DataTypes.INTEGER,
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
                type: DataTypes.STRING(8),
                allowNull: false
            },
            Ingred01: {
                type: DataTypes.STRING(30),
                allowNull: false
            },
            Qty02: DataTypes.STRING(8),
            Ingred02: DataTypes.STRING(30),
            Qty03: DataTypes.STRING(8),
            Ingred03: DataTypes.STRING(30),
            Qty04: DataTypes.STRING(8),
            Ingred04: DataTypes.STRING(30),
            Qty05: DataTypes.STRING(8),
            Ingred05: DataTypes.STRING(30),
            Qty06: DataTypes.STRING(8),
            Ingred06: DataTypes.STRING(30),
            Qty07: DataTypes.STRING(8),
            Ingred07: DataTypes.STRING(30),
            Qty08: DataTypes.STRING(8),
            Ingred08: DataTypes.STRING(30),
            Qty09: DataTypes.STRING(8),
            Ingred09: DataTypes.STRING(30),
            Qty10: DataTypes.STRING(8),
            Ingred10: DataTypes.STRING(30),
            classMethod: {
                associate: function(models) {
                    Ingredients.hasOne(models.Recipe);
                }
            }
        }
    });
return Ingredients;
}