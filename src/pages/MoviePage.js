import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import "./Movie.css";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(`http://localhost:4000/${id}`);
      const data = await response.json();
      setMovie(data);
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <header>
        <h1>{movie.title}</h1>
        <NavBar />
      </header>
      <main>
        <p>{movie.runtime} minutes</p>
        <ul>
          {movie.genres.map((genre) => (
            <li key={genre}>
              <span className="genre-tag">{genre}</span>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default Movie;