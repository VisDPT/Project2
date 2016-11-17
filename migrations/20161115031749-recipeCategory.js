'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) { 
// code used to create columns: 
// CREATE TABLE RecipeCategory
// (
//   CategoryID INT NOT NULL AUTO_INCREMENT,
//   RecipeCategory varchar(30) NOT NULL,
//   PRIMARY KEY (CategoryID)
// );
      return queryInterface.createTable('recipeCategory', { 
        CategoryID: {
          type: Sequelize.INTEGER, 
          allowNull: false, 
          autoIncrement: true
        }, 
        RecipeCategory: {
          type: Sequelize.STRING(30),
          allowNull: false
        }
      });
    
  },

  down: function (queryInterface, Sequelize) {
    
      return queryInterface.dropTable('recipeCategory');
    
  }
};
