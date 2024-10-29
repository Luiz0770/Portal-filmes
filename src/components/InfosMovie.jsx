import { useEffect, useState } from "react";
import BtnAdicionar from "./BtnAdicionar";

export default function InfosMovie({ movie }) {
  const [filmesAssistido, setFilmesAssistidos] = useState([]);
  const [filmesParaAssistir, setFilmesParaAssistir] = useState([]);

  useEffect(() => {
    const LSAssistidos = JSON.parse(localStorage.getItem("filmesVistos")) || [];
    setFilmesAssistidos(LSAssistidos);

    const LSParaAssistir =
      JSON.parse(localStorage.getItem("filmesAssistir")) || [];
    setFilmesParaAssistir(LSParaAssistir);
  }, []);

  function filmesVistos(movie) {
    if (!filmesAssistido.some((filme) => filme.id === movie.id)) {
      const listaAtualizada = [...filmesAssistido, movie];
      setFilmesAssistidos(listaAtualizada);
      localStorage.setItem("filmesVistos", JSON.stringify(listaAtualizada));
    } else {
      const listaAtualizada = filmesAssistido.filter(
        (filme) => filme.id !== movie.id
      );
      setFilmesAssistidos(listaAtualizada);
      localStorage.setItem("filmesVistos", JSON.stringify(listaAtualizada));
    }
  }

  function filmesAssistir(movie) {
    if (!filmesParaAssistir.some((filme) => filme.id === movie.id)) {
      const listaAtualizada = [...filmesParaAssistir, movie];
      setFilmesParaAssistir(listaAtualizada);
      localStorage.setItem("filmesAssistir", JSON.stringify(listaAtualizada));
    } else {
        const listaAtualizada = filmesParaAssistir.filter(
            (filme) => filme.id !== movie.id
          );
          setFilmesParaAssistir(listaAtualizada);
          localStorage.setItem("filmesAssistir", JSON.stringify(listaAtualizada));
    }
  }

  return (
    <div
      className="relative flex flex-col md:flex-row md:h-[70vh] bg-no-repeat bg-cover bg-center items-center p-5 md:p-20"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/w1280${movie.backdrop_path}')`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="mx-auto relative flex flex-col md:flex-row gap-5 md:gap-20 items-start justify-center">
        
        {/* Imagem do poster */}
        <img
          className="shadow-slate-950 shadow-lg rounded-lg w-40 md:w-60 lg:w-72"
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
        />

        {/* Informações do filme */}
        <div className="text-white max-w-lg space-y-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">{movie.title}</h1>
          <div className="flex items-center gap-5 text-sm md:text-base">
            <p>⭐ {movie.vote_average}</p>
            <p>Lançamento: {movie.release_date}</p>
          </div>
          <div className="flex flex-wrap py-3 gap-3">
            {movie.genres && movie.genres.length > 0 ? (
              movie.genres.map((genero) => (
                <h2
                  className="font-semibold border-2 py-1 px-2 rounded-lg border-cyan-950 text-sm"
                  key={genero.id}
                >
                  {genero.name}
                </h2>
              ))
            ) : (
              <p>No genres available</p>
            )}
          </div>
          <p className="font-medium text-sm md:text-base">{movie.overview}</p>
          <div className="flex gap-3">
            {filmesAssistido.some((filme) => filme.id === movie.id) ? (
              <BtnAdicionar
                funcao={() => filmesVistos(movie)}
                color={"red-800"}
              />
            ) : (
              <BtnAdicionar
                funcao={() => filmesVistos(movie)}
                color={"zinc-400"}
              />
            )}

            {filmesParaAssistir.some((filme) => filme.id === movie.id) ? (
              <BtnAdicionar
                funcao={() => filmesAssistir(movie)}
                color={"red-800"}
              />
            ) : (
              <BtnAdicionar
                funcao={() => filmesAssistir(movie)}
                color={"zinc-400"}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
