import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "./components/MovieCard/MovieCard";
import styles from "./Movies.module.css";

const Movies = () => {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
  const [movies, setMovies] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    async function getMovies() {
      const data = await fetch(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
      );
      const result = await data.json();

      setMovies(result?.results);
    }
    getMovies();
  }, []);

  console.log(movies);

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <h1 onClick={() => navigate("/")}> Netflix</h1>
        <div className="search-bar">
          <input type="text" />
          <button>search</button>
        </div>
      </nav>

      <main>
        {movies?.map(({ poster_path, title, vote_average, overview }) => (
          <MovieCard
            img={IMG_PATH + poster_path}
            title={title}
            rank={vote_average}
            description={overview}
          />
        ))}
      </main>
    </div>
  );
};

export default Movies;
