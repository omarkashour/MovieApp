import React from "react";
import MovieCard from "./components/MovieCard";
import Home from "./pages/home";
import Favourites from "./pages/favourites";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./css/App.css";

const App = () => {
  const movie_num = 1;

  return (
    <div>
      <NavBar></NavBar>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
