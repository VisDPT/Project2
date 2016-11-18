"use strict"; 

module.exports = function(sequelize, DataTypes){
var Users = connection.define('User', { 
        UserID: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true
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
          allowNull: false,
          // this is for validation. 
          	// len is a property that will make sure the characters added will be between 3 and 15 characters, otherwise it will error  
          validate: {
          	len: {
          		args: [3, 15],  // argument for len is to make it between 3 and 15 characters 
          		msg: "Please enter a password between 3 and 15 characters" // will display this error if args are not fulfilled
          		}
          	}
          },
        // timestamps: false,
        // ^^^ NEED THIS ^^^ without this, sequelize will create additional columns called 'createAt' and 'updateAt'
        	// 'createAt': timestamp of record created 
        	// 'updateAt': timestamp of record updated 
        // freezeTableName: true // sequelize automatically puralizes table names, this will prevent that from happening
      });
return Users;
} 