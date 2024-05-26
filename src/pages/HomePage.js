import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch("http://localhost:4000//movies");
      const data = await response.json();
      setMovies(data);
    };

    fetchMovies();
  }, []);

  return (
    <>
      <header>
        <h1>Home Page</h1>
        <NavBar />
      </header>
      <main>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </main>
    </>
  );
}

export default Home;