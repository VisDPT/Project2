"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
var sequelize = new Sequelize(config.database, config.username, config.password, config);
var db = {};

fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
        var model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });


// //http://stackoverflow.com/questions/31802946/sequelize-object-is-not-a-function
// if (!this.importCache[path]) {
//     var defineCall = (arguments.length > 1 ? arguments[1] : require(path));
//     this.importCache[path] = defineCall(this, DataTypes);
//   }
// ////possible debug code above?

var exphbs = require('express-handlebars');
app.get('handlebars', exphbs({
    defaultLayout: 'MAIN'
}));
app.set('view engine', 'handlebars');


Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;