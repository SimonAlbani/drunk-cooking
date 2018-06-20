const express = require("express");
const parser = require("body-parser");
const methodOverride = require("method-override");
const app = express();

const recipesController = require
("./controllers/recipes");
app.use(parser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use("/", recipesController);

app.listen(4000, () => {
    console.log("Running on port 4000");
});