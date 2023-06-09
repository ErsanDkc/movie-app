import React, { useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

function Header() {
  const [movieName, setMovieName] = useState("");
  const [data, setData] = useState([]);

  const API_KEY = 'c98600ffa0bbeeb52be8da3fbfaf185b'

  const getMovies = async () => {
    try {
      const { data } = await axios(`https://api.themoviedb.org/3/search/movie?query=${movieName}}&api_key=${API_KEY}`);
      setData(data.results);
      console.log(data)
    } catch (error) {
      console.log("error:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!movieName.trim()) {
      return window.alert("Please enter movie name");
    }
    await getMovies();

    setMovieName("");
  };

  const handleChange = (e) => setMovieName(e.target.value);
  return (
    <header className="d-flex flex-column justify-content-center align-items-center gap-5 mt-5">
      <form
        onSubmit={handleSubmit}
        style={{ width: "600px" }}
        className="d-flex gap-2"
      >
        <input
          className="form-control"
          type="text"
          value={movieName}
          onChange={handleChange}
          placeholder="Search a movie"
          autoFocus
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>

      <MovieCard data={data} />
    </header>
  );
}

export default Header;
