//Allergy.js under models: --- it works
"use strict ";
module.exports = function(sequelize, DataTypes) { 
    var Allergy = sequelize.define('Allergy', {
        //2nd DEBUG: connection.define changed to sequelize.define
        AllergyID: {
            //3rd DEBUG: Sequelize.__________ changed to DataTypes.__________;  Because var Sequelize is not defined anywhere, there were errors being thrown with that; In the cats example, DataTypes.______ were used I believe for that reason
            //If you want to do Sequelize._____________, see this example http://stackoverflow.com/questions/33138603/expressjs-sequelize-unrecognized-data-type
            //my hypothesis is we may need to define it and then use it bc the current error im thinking is bc it does not like the DataTypes
            //http://docs.sequelizejs.com/en/latest/api/datatypes/
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'Recipes',
                key: 'RecipeID'
            },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            Category: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            FoodAllergy: DataTypes.STRING(30),
            AllergyCheckbox: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            /*classMethods: {
                associate: function(models) {
                    Allergy.belongsTo(models.Recipes, {
                        foreignKey: 'AllergyID'
                    });
                },
            }*/
            classMethods: {
                associate: function(models) {
                    Allergy.belongsToMany(models.Recipes, {
                        through: 'AllergyRecipes'
                    })
                }
            }
    })        
return Allergy;
};