module.exports = function(sequelize, DataTypes){

var Ingredient = connection.define('ingredients', { 

        RecipeID: {
          type: Sequelize.INTEGER,
          allowNull: false
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
        Ingred10: Sequelize.STRING(30)
      }); 

return Ingredient;
}