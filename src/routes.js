import Home from "./pages/HomePage";
import Directors from "./pages/DirectorsPage";
import Actors from "./pages/ActorsPage";
import Movie from "./pages/MoviePage";
import ErrorPage from "./pages/ErrorPage";


const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/directors",
    element: <Directors />,
    errorElement: <ErrorPage />
  },
  {
    path: "/actors",
    element: <Actors />,
    errorElement: <ErrorPage />
  },
  {
    path: "/movie/:id",
    element: <Movie />,
    errorElement: <ErrorPage />
  }
];

export default routes;