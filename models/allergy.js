"use strict";

module.exports = function(sequelize, DataTypes) {
    var Allergy = sequelize.define('Allergy', {
        //2nd DEBUG: connection.define changed to sequelize.define
        AllergyID: {
            //3rd DEBUG: Sequelize.__________ changed to DataTypes.__________
            type: DataTypes.INTEGER,
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
            type: DataTypes.STRING(20),
            allowNull: false
        },
        FoodAllergy: DataTypes.STRING(30),
        AllergyCheckbox: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        classMethods: {
            associate: function(models) {
                Allergy.belongsToMany(models.Recipe, {
                        through: 'AllergyRecipe'
                    }) //1st debug: missing ) --FIXED
            }
        }
    });
    return Allergy;
}