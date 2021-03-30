import React from "react";
import Ritem from './Ritem';
function Recipe(props) {
  const { recipes } = props;
  return (
   
    <div class="card-columns">
    {recipes.map(recipe => (
      <Ritem
        key={Math.random() * 100}
        name={recipe.recipe.label}
        image={recipe.recipe.image}
        ingredientLines={recipe.recipe.ingredientLines}
          
    />))}
    </div>

  );
}
export default Recipe;
