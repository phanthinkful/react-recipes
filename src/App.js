import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const addRecipe = (data) => {
    setRecipes([
      ...recipes,
      {
        name: data.name,
        cuisine: data.cuisine,
        photo: data.photo,
        ingredients: data.ingredients,
        preparation: data.preparation
      }
    ]);
  };
  
  const deleteRecipe = (deleteIndex) => {
    setRecipes(recipes.filter((recipe,recipeIndex) => deleteIndex !== recipeIndex));
  };
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate addRecipe={addRecipe} />
    </div>
  );
}

export default App;
