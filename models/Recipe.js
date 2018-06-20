module.exports = function recipeModel(sequelize, DataTypes) {
    return sequelize.define("recipe", {
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        instructions: DataTypes.STRING,
        ingredients: DataTypes.STRING
    });
};
