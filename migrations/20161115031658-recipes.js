'use strict';

// ==== i think this hooks up foregin and primary keys together?? =====================
var ID_pk = this.sequelize.define('recipes', { RecipeID: Sequelize.INTEGER }),
    name_fk = this.sequelize.define('recipes', { CategoryID: Sequelize.STRING }),
    allery_fk = this.sequelize.define('recipes', {AllergyID: Sequelize.INTEGER})
 
ID_pk.hasMany(name_fk)
ID_pk.hasMany(allery_fk)
name_fk.belongsTo(ID_pk)
allery_fk.belongsTo(ID_pk)
// reference: 
// http://docs.sequelizejs.com/en/1.7.0/docs/associations/#foreign-keys
// ==== ^^^ i think this hooks up foregin and primary keys together?? ^^^ =====================

module.exports = {
  up: function (queryInterface, Sequelize) {
// used following commented out code to create
// CREATE TABLE Recipes
// (
//   RecipeID INT NOT NULL AUTO_INCREMENT,
//   RecipeName varchar(50) NOT NULL,
//   CategoryID INT NOT NULL,
//   AllergyID INT NOT NULL,
//   PRIMARY KEY (RecipeID),
//   FOREIGN KEY (CategoryID) REFERENCES RecipeCategory (CategoryID),
//   FOREIGN KEY (AllergyID) REFERENCES Allergy (AllergyID)
// );
      return queryInterface.createTable('recipes', { 
        RecipeID: {
          type: Sequelize.INTEGER 
          autoIncrement: true,
          primaryKey: true, // not null built into this 
        }, 
        RecipeName: Sequelize.STRING(50), 
        CategoryID: {
          type: Sequelize.INTEGER,
          allowNull: false
          // could not find the thing for foreignkey, found it may be depreciated
          // please see code on lines 4 - 11, for pk and fk? 
          // refence: 
          // http://stackoverflow.com/questions/14169655/sequelize-js-foreign-key
        }, 
        AllergyID: {
          type: Sequelize.INTEGER, 
          allowNull: false
          // could not find the thing for foreignkey, found it may be depreciated
          // please see code on lines 4 - 11, for pk and fk? 
          // refence: 
          // http://stackoverflow.com/questions/14169655/sequelize-js-foreign-key
        }

      });
    
  },

  down: function (queryInterface, Sequelize) {
    
      return queryInterface.dropTable('recipes');
    
  }
};
