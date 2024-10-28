import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CarroselCast from "../components/CarroselCast";

export default function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [trailer, setTrailer] = useState([]);
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchDetail = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=f60febf3e7bf76f4314496086bf8c249&language=pt-br`
        );

        const fetchTrailer = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=f60febf3e7bf76f4314496086bf8c249&language=pt-br`
        );

        const fetchCast = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=f60febf3e7bf76f4314496086bf8c249&language=pt-br`
        );

        if (!fetchDetail.ok || !fetchTrailer.ok || !fetchCast.ok) {
          throw new Error("Falha ao buscar os dados");
        }

        const resDetail = await fetchDetail.json();
        const resTrailer = await fetchTrailer.json();
        const resCast = await fetchCast.json();

        setMovie(resDetail);
        setTrailer(resTrailer.results);
        setCast(resCast.cast);
      } catch (erro) {
        console.log(erro);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();

    window.scrollTo(0, 0);
  }, [id]);

  return isLoading ? (
    <div className="h-screen flex justify-center items-center">
      <l-dot-wave size="47" speed="1" color="black" />
    </div>
  ) : (
    <>
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
            {/* Botão de ação */}
            <div>
              <button
                title="Add New"
                className="group cursor-pointer outline-none hover:rotate-90 duration-300 mt-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50px"
                  height="50px"
                  viewBox="0 0 24 24"
                  className="stroke-zinc-400 fill-none  group-active:stroke-zinc-200 group-active:fill-zinc-600 group-active:duration-0 duration-300"
                >
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    strokeWidth={1.5}
                  />
                  <path d="M8 12H16" strokeWidth={1.5} />
                  <path d="M12 16V8" strokeWidth={1.5} />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Elenco */}
      <div className="mt-10 px-5 md:px-10 w-full md:w-5/6 mx-auto">
        <h2 className="font-semibold text-xl md:text-3xl mb-5">Elenco Principal:</h2>
        <CarroselCast cast={cast} />
      </div>

      {/* Trailer */}
      <div className="flex flex-col justify-center items-center pb-10 px-5">
        <h2 className="font-semibold text-xl md:text-3xl py-5">Assista o Trailer!</h2>
        {trailer && trailer.length > 0 ? (
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${trailer[0].key}`}
              title="YouTube video player"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <p>No video available</p>
        )}
      </div>
    </>
  );
}