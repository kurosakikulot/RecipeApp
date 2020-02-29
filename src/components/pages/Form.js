import React, { useState, useContext, useEffect } from "react";
import { RecipeContext } from "../providers/RecipeContext";

export default function Form() {
  const APP_ID = "ebed5dd5";
  const APP_KEY = "8706f069f1c4492d7de4e0a5839500a2";

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const [recipe, setRecipe] = useContext(RecipeContext);

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = () => {
    let checkFetch = response => {
      if (!response.ok) {
        throw alert("Please enter a food name.");
      }
      return response;
    };
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then(checkFetch)
      .then(res => res.json())
      .then(data => setRecipe(data.hits));
  };

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div>
      <form
        className="search-form container form center-align"
        onSubmit={getSearch}
      >
        <input
          type="text"
          className="search-bar search-input"
          value={search}
          onChange={handleChange}
        />
        <br />
        <button
          className="search-button waves-effect waves-light btn search-button"
          type="submit"
        >
          <i className="material-icons left">search</i> Search Recipe
        </button>
      </form>
    </div>
  );
}
