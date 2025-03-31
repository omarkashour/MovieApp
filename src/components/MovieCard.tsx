import React from "react";
import "../css/MovieCard.css";
interface Props {
  id: number;
  title: string;
  release_date: number;
  poster_path: string;
}
const movieCard = ({ id, title, release_date, poster_path }: Props) => {
  const handleOnClick = () => {};

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
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
