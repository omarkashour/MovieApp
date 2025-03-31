import React, { useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";

const movies = [
  { id: 1, title: "John Wick", release_date: 2021 },
  { id: 2, title: "Avengers", release_date: 2024 },
  { id: 3, title: "Iron Man", release_date: 2023 },
  { id: 4, title: "Spider Man", release_date: 2020 },
  { id: 5, title: "Hulk", release_date: 2007 },
  { id: 6, title: "Moon Knight", release_date: 2010 },
];

const home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchQuery("");
  };
  return (
    <>
      <div className="home">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search for movies..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <button type="submit" className="search-btn">
            Search
          </button>
        </form>

        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard
              id={movie.id}
              title={movie.title}
              release_date={movie.release_date}
              imgSrc={""}
              key={movie.id}
            ></MovieCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default home;
