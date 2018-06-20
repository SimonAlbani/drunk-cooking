const express = require("express");
const router = express.Router();
const Recipe = require("../db/connection").Recipes;


router.get("/", (req, res) => {
  Recipe.findAll()
    .then(recipes => {
      res.render("index", {
        recipes: recipes
      });
    })
    .catch(err => console.error(err));
});

router.get("/new", (req, res) => {
  res.render("new", {
  });
});

router.get("/toad", (req, res) => {
    res.render("toad", {
    });
  });

router.post("/", (req, res) => {
  Recipe.create(req.body).then(() => {
    res.redirect("/");
  });
});

router.get("/:id", (req, res) => {
  Recipe.findById(req.params.id).then(recipe => {
    res.render("show", {
      recipe: recipe
    });
  });
});

router.get("/edit/:id", (req, res) => {
  Recipe.findById(req.params.id).then(recipe => {
    res.render("edit", {
      recipe: recipe
    });
  });
});

router.put("/:id", (req, res) => {
  req.body.complete = req.body.complete ? true : false;
  Recipe.findById(req.params.id)
    .then(recipe => {
      return recipe.updateAttributes(req.body);
    })
    .then(recipe => {
      res.redirect("/");
    });
});

router.delete("/:id", (req, res) => {
  Recipe.findById(req.params.id)
    .then(recipe => {
      recipe.destroy();
    })
    .then(() => {
      res.redirect("/");
    });
});

module.exports = router;
