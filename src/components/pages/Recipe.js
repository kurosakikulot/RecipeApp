import React, { useContext } from "react";
import { RecipeContext } from "../providers/RecipeContext";

export default function Recipe() {
  const [recipe] = useContext(RecipeContext);
  const recipeData = recipe.map(recipe => (
    <div className="col s12 m6 l6">
      <div className="card">
        <div className="card-image">
          <img src={recipe.recipe.image} />
          <span className="card-title">{recipe.recipe.label}</span>
        </div>
        <div className="card-content">
          {recipe.recipe.ingredients.map((ingredients, i) => (
            <ul key={i}>
              <li>{ingredients.text}</li>
            </ul>
          ))}
        </div>
        <div className="card-action">
          <a
            className="waves-effect waves-light btn card-btn"
            href={recipe.recipe.url}
            target="_blank"
          >
            Visit Link
          </a>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <div className="row center-align">{recipeData}</div>
    </div>
  );
}
