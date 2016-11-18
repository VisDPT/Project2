"use strict"; 

module.exports = function(sequelize, DataTypes){
var Steps = connection.define('Steps', { 
        StepsID: {
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
        Steps01: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        Steps02: Sequelize.TEXT,
        Steps03: Sequelize.TEXT, 
        Steps04: Sequelize.TEXT,
        Steps05: Sequelize.TEXT,
        Steps06: Sequelize.TEXT,
        Steps07: Sequelize.TEXT,
        Steps08: Sequelize.TEXT,
        Steps09: Sequelize.TEXT,
        Steps10: Sequelize.TEXT,
        Temp: Sequelize.INTEGER, 
        Time: Sequelize.STRING(20), 
        Yield: Sequelize.STRING(30),
        classMethod: {
        	associate: function(models) {
       			Steps.hasOne(models.Recipe);
        }
     }
   }
 });
      return Steps;
}