const express = require("express");
const app = express();
const PORT = 3000;
const data = require("./data.json");
const fs = require("fs");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const getRecipeNames = (data) => {
  let response = {};
  let recipeNames = [];
  for (recipe of data.recipes) {
    recipeNames.push(recipe.name);
  }
  response.recipeNames = recipeNames;
  return response;
};

const getRecipeDetails = (name) => {
  let response = {};
  for (recipe of data.recipes) {
    if (recipe.name === name) {
      response = { details: {} };
      response.details.ingredients = recipe.ingredients;
      let numSteps = recipe.instructions.length;
      response.numSteps = numSteps;
      return response;
    }
  }
  return response;
};
const checkRecipes = (recipeName) => {
  for (recipe of data.recipes) {
    if (recipe.name === recipeName) {
      return true;
    }
  }
  return false;
};

app.listen(PORT, console.log(`running on ${PORT}`));

app.get("/recipes", (req, res, next) => {
  res.json(getRecipeNames(data));
});

app.get("/recipes/details/:name", (req, res, next) => {
  res.status(200).json(getRecipeDetails(req.params.name));
});

app.post("/recipes", (req, res, next) => {
  let recipeName = req.body.name;
  let recipeExists = checkRecipes(recipeName);
  if (recipeExists) {
    res.status(400).send({
      error: "Recipe already exists",
    });
  } else {
    fs.readFile("./data.json", function (err, data) {
      var json = JSON.parse(data);
      json.recipes.push(req.body);
      fs.writeFile("./data.json", JSON.stringify(json), function (err) {
        if (err) throw err;
      });
    });
    res.status(201).send();
  }
});

app.put("/recipes", (req, res, next) => {
  let recipeName = req.body.name;
  let recipeExists = checkRecipes(recipeName);
  if (recipeExists) {
    fs.readFile("./data.json", function (err, data) {
      var json = JSON.parse(data);
      let filtered = json.recipes.filter(
        (recipe) => recipe.name !== recipeName
      );
      filtered.push(req.body);
      fs.writeFile("./data.json", JSON.stringify(filtered), function (err) {
        if (err) throw err;
      });
    });

    res.status(204).send();
  } else {
    res.status(400).send({
      error: "Recipe does not exist",
    });
  }
});
