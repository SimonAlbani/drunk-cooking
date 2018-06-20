const connection = require("./connection");
const seedData = require("./seeds.json");

connection.Recipes.destroy({ where: {} }).then(() => {
    connection.Recipes.bulkCreate(seedData).then(() => {
        process.exit();
    });
});
