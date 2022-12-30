import NavBar from "./Components/NavBar"
import './App.css';
import { useState } from "react";
import { movies } from "./Data/MoviesData";
import AddMovieModal from "./Components/AddMovieModal";
import MovieList from "./Components/MovieList";

function App() {

  const [search, setSearch] = useState("")
  const [moviesData, setMoviesData] = useState(movies)

  return (
    <div className="App">
    <NavBar setSearch={setSearch} />
    <AddMovieModal moviesData={moviesData} setMoviesData={setMoviesData} />
    <MovieList search={search} moviesData={moviesData} setMoviesData={setMoviesData} />
    </div>
  );
}

export default App;
