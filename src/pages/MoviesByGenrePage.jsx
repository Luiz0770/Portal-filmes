import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

export default function MoviesByGenrePage({ generoEscolhido }) {

  const [moviesByGenres, setMoviesByGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchMoviesByGenres = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=f60febf3e7bf76f4314496086bf8c249&language=pt-BR&with_genres=${generoEscolhido}`
        );
        const resMoviesByGenres = await fetchMoviesByGenres.json();
        setMoviesByGenres(resMoviesByGenres.results);
      }
      catch (erro) {
        console.error("Erro ao buscar filmes por gênero:", erro);
      } finally {
        setIsLoading(false)
      }
    };

    fetchData();
  }, [generoEscolhido]);

  return (
    <section className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 content-center justify-center">
      {isLoading ? (
        <div className="w-screen mt-10 flex justify-center">
          <l-dot-wave size="47" speed="1" color="black"></l-dot-wave>
        </div>
      ) : moviesByGenres.length > 0 ? (
        moviesByGenres.map((movie) => (
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
  );
}
