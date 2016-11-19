'use strict';

// // primary and foreign keys setup: 
// var allery_fk = this.sequelize.define('allergy', {AllergyID: Sequelize.INTEGER})
 
// allery_fk.belongsTo(ID_pk)
// // reference for above: 
// // http://docs.sequelizejs.com/en/1.7.0/docs/associations/#foreign-keys

module.exports = {
  up: function (queryInterface, Sequelize) {
  // used following code for columns:
  //   CREATE TABLE Allergy
  // (
  //   AllergyID INT NOT NULL AUTO_INCREMENT,
  //   Category varchar(20) NOT NULL,
  //   FoodAllergy varchar(30) NOT NULL,
  //   PRIMARY KEY (AllergyID)
  // );

      return queryInterface.createTable('allergy', { 
        AllergyID: {
          type: Sequelize.INTEGER, 
          allowNull: false,
        },
        Category: {
          type: Sequelize.STRING(20),
          allowNull: false
        },
        FoodAllergy: Sequelize.STRING(30)
      });
    
  },

  down: function (queryInterface, Sequelize) {
    
      return queryInterface.dropTable('allergy');
    
  }
};
