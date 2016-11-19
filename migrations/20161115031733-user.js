'use strict';

// var ID_pk = this.sequelize.define('recipes', { RecipeID: Sequelize.INTEGER }),


module.exports = {
  up: function (queryInterface, Sequelize) {
// code used to add columns: 
//  CREATE TABLE User
// (
//   UserID INT NOT NULL AUTO_INCREMENT,
//   FirstName varchar(20) NOT NULL,
//   LastName varchar(25) NOT NULL,
//   email varchar(50) NOT NULL,
//   Password varchar(20) NOT NULL,
//   PRIMARY KEY (UserID)
// );
      return queryInterface.createTable('user', { 
        UserID: {
          type: Sequelize.INTEGER, 
          allowNull: false, 
          autoIncrement: true
        },
        FirstName: {
          type: Sequelize.STRING(20), 
          allowNull: false 
        },
        LastName: {
          type: Sequelize.STRING(25),
          allowNull: false
        }, 
        email: {
          type: Sequelize.STRING(50),
          allowNull: false
        }, 
        Password: {
          type: Sequelize.STRING(20),
          allowNull: false
        }

      });
    
  },

  down: function (queryInterface, Sequelize) {
    
      return queryInterface.dropTable('user');
    
  }
};
