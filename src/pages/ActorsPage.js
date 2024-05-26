import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);

  const fetchActors = async () => {
    const response = await fetch("http://localhost:4000/actors");
    const data = await response.json();
    setActors(data);
  };

  useEffect(() => {
    fetchActors();
  }, []);

  return (
    <>
      <header>
        <h1>Actors Page</h1>
        <NavBar />
      </header>
      <main>
        {actors.map((actor) => (
          <article key={actor.id}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie) => (
                <li key={movie.id}>{movie.title}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Actors;