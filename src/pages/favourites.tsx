import React from "react";
import "../css/Favourites.css";

const favourites = () => {
  return (
    <div className="favourites-empty">
      <h2>No Favourite Movies Yet</h2>
      <p>Start adding movies to your favourite and they will show up here!</p>
    </div>
  );
};

export default favourites;
