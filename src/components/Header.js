import React from "react";

function Header(props) {
    const {search,onInputChange,onsearch}=props; 
  return (

    <div className="jumbotron">
      <h1 className="display-1">
        <span class="material-icons icon">menu_book</span>Food Recipe
      </h1>
      <div class="input-group w-50 mx-auto">
        <input
          type="text"
          class="form-control"
          placeholder="Search Your Recipie..."
          value={search}
          onChange={onInputChange}
        />
        <div class="input-group-append">
          <button className="btn btn-dark" onClick={onsearch}>Search</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
