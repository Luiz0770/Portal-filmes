import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { dotWave } from "ldrs";

dotWave.register();

export default function MovieListPage() {
  const [pesquisa, setPesquisa] = useState("");
  const [movies, SetMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=f60febf3e7bf76f4314496086bf8c249&language=pt-br"
    )
      .then((res) => res.json())
      .then((res) => SetMovies(res.results))
      .catch((erro) => console.log(erro))
      .finally(() => setIsLoading(false));
  }, []);

  function aoDigitar(e) {
    setPesquisa(e.target.value);
    console.log(e.target.value);
  }

  const filmeFiltrado = movies.filter((movie) =>
    movie.title.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <div className="min-h-screen">
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

      <section className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 content-center justify-center">
        {isLoading ? (
          <div className="w-screen mt-10 flex justify-center">
            <l-dot-wave size="47" speed="1" color="black"></l-dot-wave>
          </div>
        ) : filmeFiltrado.length > 0 ? (
          filmeFiltrado.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
            />
          ))
        ) : (
          <p className="text-2xl text-center">Filme não encontrado!</p>
        )}
      </section>
    </div>
  );
}
