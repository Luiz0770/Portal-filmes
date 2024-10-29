import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CarroselCast from "../components/CarroselCast";
import InfosMovie from "../components/InfosMovie";

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
      <InfosMovie movie={movie}/>

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
