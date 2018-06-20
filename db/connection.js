const Sequelize = require("sequelize");

const sequelize = new Sequelize("recipe", "inclassuser", "Hartford1810", {
  host: "localhost",
  dialect: "postgres",
  operatorsAliases: false
});

const Recipes = sequelize.import("../models/Recipe");

sequelize.authenticate().then(() => {
  console.log("connected");
});

module.exports = {
  Sequelize,
  sequelize,
  Recipes
};
