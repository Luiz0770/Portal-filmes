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

    // Força a página a carregar no topo
    window.scrollTo(0, 0);
  }, [id]);

  console.log(trailer);

  return isLoading ? (
    <div className="h-screen flex justify-center items-center">
      <l-dot-wave size="47" speed="1" color="black" />
    </div>
  ) : (
    <>
      <div
        className="relative flex flex-col h-[70vh] bg-no-repeat bg-cover bg-center items-center p-20"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/w1280${movie.backdrop_path}')`,
        }}
      >
        {/* Infos */}
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="relative grid grid-cols-2 items-start">
          <img
            className="shadow-slate-950 shadow-lg rounded-lg max-w-max"
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="text-white max-w-lg">
            <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
            <div className="flex items-center gap-10">
              <p className="">⭐{movie.vote_average}</p>
              <p>Lançamento: {movie.release_date}</p>
            </div>

            <div className="flex py-5 gap-5">
              {movie.genres && movie.genres.length > 0 ? (
                movie.genres.map((genero) => (
                  <h2
                    className="font-semibold border-2 py-2 px-3 rounded-lg border-cyan-950"
                    key={genero.id}
                  >
                    {genero.name}
                  </h2>
                ))
              ) : (
                <p>No genres available</p>
              )}
            </div>
            <p className="font-medium">{movie.overview}</p>
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
                  className="stroke-zinc-400 fill-none group-hover:fill-zinc-800 group-active:stroke-zinc-200 group-active:fill-zinc-600 group-active:duration-0 duration-300"
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
      <div className="mt-10 px-10 w-5/6 mx-auto">
        <h2 className="font-semibold text-3xl mb-5">Elenco Principal:</h2>
        <CarroselCast cast={cast} />
      </div>

      {/* Trailer */}
      <div className="flex flex-col justify-center items-center pb-10">
        <h2 className="font-semibold text-3xl py-5">Assista o Trailer!</h2>
        {trailer && trailer.length > 0 ? (
          <iframe
            className="rounded-lg"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${trailer[0].key}`}
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        ) : (
          <p>No video available</p>
        )}
      </div>
    </>
  );
}
