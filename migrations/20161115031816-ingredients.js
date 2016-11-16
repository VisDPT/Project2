'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
// used this code to create columns: 
// CREATE TABLE Ingredients
// (
//   RecipeID INT NOT NULL,
//   Qty01 varchar(8) NOT NULL,
//   Ingred01 varchar(30) NOT NULL,
//   Qty02 varchar(8),
//   Ingred02 varchar(30),
//   Qty03 varchar(8),
//   Ingred03 varchar(30),
//   Qty04 varchar(8),
//   Ingred04 varchar(30),
//   Qty05 varchar(8),
//   Ingred05 varchar(30),
//   Qty06 varchar(8),
//   Ingred06 varchar(30),
//   Qty07 varchar(8),
//   Ingred07 varchar(30),
//   Qty08 varchar(8),
//   Ingred08 varchar(30),
//   Qty09 varchar(8),
//   Ingred09 varchar(30),
//   Qty10 varchar(8),
//   Ingred10 varchar(30)
// );
      return queryInterface.createTable('ingredients', { 

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
    
  },

  down: function (queryInterface, Sequelize) {
    
      return queryInterface.dropTable('ingredients');
    
  }
};
