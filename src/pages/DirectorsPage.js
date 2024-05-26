import { useEffect, useState } from "react";
// import "./Directors.css";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    const fetchDirectors = async () => {
      const response = await fetch("http://localhost:4000/directors");
      const data = await response.json();
      setDirectors(data);
    };

    fetchDirectors();
  }, []);

  return (
    <>
      <header>
        <h1>Directors Page</h1>
        <NavBar />
      </header>
      <main>
        {directors.map((director) => (
          <article key={director.id}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie) => (
                <li key={movie.id}>{movie.title}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Directors;