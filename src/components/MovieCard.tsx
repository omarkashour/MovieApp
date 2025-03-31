import React from "react";
import "../css/MovieCard.css";
interface Props {
  id: number;
  title: string;
  release_date: number;
  imgSrc: string;
}
const movieCard = ({ id, title, release_date, imgSrc }: Props) => {
  const handleOnClick = () => {
    alert("clicked");
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={imgSrc} alt={title} />
        <div className="movie-overlay">
          <button className="favourite-btn" onClick={handleOnClick}>
            ♡
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{title}</h3>
        <p>Release: {release_date}</p>
        <p>ID: {id}</p>
      </div>
    </div>
  );
};

export default movieCard;
