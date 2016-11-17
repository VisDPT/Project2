'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
// used following code for columns: 
// CREATE TABLE AllergyCheckBox
// (
//   AllergyID INT NOT NULL,
//   UserID INT NOT NULL,
//   AllergyCheckbox boolean,
//   PRIMARY KEY (AllergyID),
//   FOREIGN KEY (UserID) REFERENCES User (UserID)
// );

      return queryInterface.createTable('allergyCheckbox', { 
        AllergyID: {
          type: Sequelize.INTEGER, 
          allowNull: false,
        },
        UserID: {
          type: Sequelize.INTEGER, 
          allowNull: false
        }
        AllergyCheckbox: Sequelize.BOOLEAN
      });
    
  },

  down: function (queryInterface, Sequelize) {
    
      return queryInterface.dropTable('allergyCheckbox');
    
  }
};
