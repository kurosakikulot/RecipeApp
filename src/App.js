import React, { useState, useEffect } from "react";

import Nav from "./components/pages/Nav";
import Form from "./components/pages/Form";
import { RecipeProvider } from "./components/providers/RecipeContext";
import Recipe from "./components/pages/Recipe";
import Footer from "./components/pages/Footer";

const App = () => {
  return (
    <RecipeProvider>
      <div className="App">
        <Nav />
        <Form />
        <Recipe />
        <Footer />
      </div>
    </RecipeProvider>
  );
};

export default App;
