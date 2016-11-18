"use strict";

module.exports = function(sequelize, DataTypes) {
    var Steps = sequelize.define('Steps', {
            StepsID: {
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
            Steps01: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            Steps02: DataTypes.TEXT,
            Steps03: DataTypes.TEXT,
            Steps04: DataTypes.TEXT,
            Steps05: DataTypes.TEXT,
            Steps06: DataTypes.TEXT,
            Steps07: DataTypes.TEXT,
            Steps08: DataTypes.TEXT,
            Steps09: DataTypes.TEXT,
            Steps10: DataTypes.TEXT,
            Temp: DataTypes.INTEGER,
            Time: DataTypes.STRING(20),
            Yield: DataTypes.STRING(30),
            classMethod: {
                associate: function(models) {
                    Steps.hasOne(models.Recipe);
                }
            }
        }
    });
return Steps;
}