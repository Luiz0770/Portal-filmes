import { useState } from "react";
import movies from "../data/movies.json";
import MovieCard from "../components/MovieCard";

export default function MovieListPage() {
  const [pesquisa, setPesquisa] = useState("");

  function aoDigitar(e) {
    setPesquisa(e.target.value);
    console.log(e.target.value);
  }

  const filmeFiltrado = movies.filter((movie) =>
    movie.titulo.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="my-6 text-3xl">Movie List Page</h1>
        <input
          type="text"
          value={pesquisa}
          onChange={aoDigitar}
          className="border rounded px-2 py-1 w-1/2 mb-5"
          placeholder="Digite seu filme aqui..."
        />
      </div>

      <section className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 content-center justify-center">
        {
          filmeFiltrado.length > 0 ? (
          filmeFiltrado.map(movie => (
            <MovieCard
              key={movie.id}
              titulo={movie.titulo}
              imagem_destaque={movie.imagem_destaque}
            />
          ))
        ) : (
          <p className="text-2xl text-center">Filme não encontrado!</p>
        )}
      </section>
    </>
  );
}
