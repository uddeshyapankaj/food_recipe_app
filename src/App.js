import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Recipe from "./components/Recipe";
import Axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "c89f9402";
  const APP_KEY = "02c41858b711fbc04a6bdd4a2a9f4965";
  useEffect(() => {
    getrecipes();
  }, []);

  const getrecipes = async () => {
    const result = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    
    setRecipes(result.data.hits);
  };

  const onInputChange = (e) => {
    setSearch(e.target.value);
  };
  const onsearch = ()=>{
    getrecipes();
  };
  return (
    <div className="App">
      <Header search={search} onInputChange={onInputChange} onsearch={onsearch}></Header>
      <div className="container"><Recipe recipes={recipes}></Recipe></div>
      
    </div>
  );
}

export default App;
