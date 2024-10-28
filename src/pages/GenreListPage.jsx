import { useEffect, useState } from "react";
import MoviesByGenrePage from "./MoviesByGenrePage";

export default function GenreListPage() {

  const [genres, setGenres] = useState([]);
  const [generoEscolhido, setGeneroEscolhido] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchGenres = await fetch(
          "https://api.themoviedb.org/3/genre/movie/list?api_key=f60febf3e7bf76f4314496086bf8c249&language=pt-BR"
        );
        const resGenres = await fetchGenres.json();
        setGenres(resGenres.genres);
      } catch (erro) {
        console.error("Erro ao buscar gêneros:", erro);
      }
    };
    fetchData();
  }, []);

  function aoEscolher(valor) {
    setGeneroEscolhido(valor);
  }

  return (
    <>
      <div className="min-h-screen px-16">
        <div className="flex flex-col justify-center items-center">
          <h1 className="my-6 text-3xl">Genre Page</h1>
          <select
            name="generos"
            id="generos"
            onChange={(e) => aoEscolher(e.target.value)}
            className="border rounded px-2 py-1 w-1/2 mb-5"
            value={generoEscolhido}
          >
            <option value="" disabled>Selecione um gênero</option>
            {genres.map((genero) => (
              <option key={genero.id} value={genero.id}>
                {genero.name}
              </option>
            ))}
          </select>
        </div>
        <MoviesByGenrePage generoEscolhido={generoEscolhido} />
      </div>
    </>
  );
}
