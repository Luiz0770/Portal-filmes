import { useState } from "react";
import movies from "../data/movies.json";
import MovieCard from "../components/MovieCard";

export default function MovieListPage() {
  const [pesquisa, setPesquisa] = useState("");

  function aoDigitar(e) {
    setPesquisa(e.target.value);
    console.log(e.target.value);
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1>Movie List Page</h1>
        <input
          type="text"
          value={pesquisa}
          onChange={aoDigitar}
          className="border"
        />
      </div>

      {movies
        .filter(
          (movie) =>
            pesquisa === "" ||
            movie.titulo.toLowerCase().includes(pesquisa.toLowerCase())
        )
        .map((movie) => (
          <MovieCard
            key={movie.id}
            titulo={movie.titulo}
            imagem_destaque={movie.imagem_destaque}
          />
        ))}
    </>
  );
}
