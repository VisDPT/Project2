'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
// code used to create columns: 
// CREATE TABLE Steps
// (
//   RecipeID INT NOT NULL,
//   Steps01 varchar(30) NOT NULL,
//   Steps02 varchar(30),
//   Steps03 varchar(30),
//   Steps04 varchar(30),
//   Steps05 varchar(30),
//   Steps06 varchar(30),
//   Steps07 varchar(30),
//   Steps08 varchar(30),
//   Steps09 varchar(30),
//   Steps10 varchar(30),
//   Temp INT,
//   Time varchar(20),
//   Yield varchar(30)
// );
      return queryInterface.createTable('steps', { 
        RecipeID: {
          type: Sequelize.INTEGER, 
          allowNull: false
        }, 
        Steps01: {
          type: Sequelize.STRING(30),
          allowNull: false
        },
        Steps02: Sequelize.STRING(30),
        Steps03: Sequelize.STRING(30),
        Steps04: Sequelize.STRING(30),
        Steps05: Sequelize.STRING(30),
        Steps06: Sequelize.STRING(30),
        Steps07: Sequelize.STRING(30),
        Steps08: Sequelize.STRING(30),
        Steps09: Sequelize.STRING(30),
        Steps10: Sequelize.STRING(30),
        Temp: Sequelize.INTEGER, 
        Time: Sequelize.STRING(20), 
        Yield: Sequelize.STRING(30)
      });
        
  },

  down: function (queryInterface, Sequelize) {
    
      return queryInterface.dropTable('steps');
    
  }
};
