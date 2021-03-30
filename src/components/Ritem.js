import React from "react";

const Ritem = props => {
  const { name, image, ingredientLines } = props;
  return (
      <div className="card py-2 text-center">
        <img src={image} alt="yt"className="img-fluid w-20 mx-auto rounded-circle" />
        <div className="card-body">
          <h5>{name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          {ingredientLines.map(ingredient => (
            <li className="list-group-item">{ingredient}</li>
          ))}
        </ul>
      </div>
  );
};

export default Ritem;