import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=f60febf3e7bf76f4314496086bf8c249&language=pt-br`
    )
      .then((res) => res.json())
      .then((res) => {
        setMovie(res);
        console.log(res);
      })
      .catch((erro) => console.log(erro))
      .finally(() => setIsLoading(false))
  }, []);

  console.log(movie);

  return isLoading ? <div className="h-screen flex justify-center items-center"><l-dot-wave size="47" speed="1" color="black"/></div> : (
    <>
      <div
        className="grid grid-cols-2 content-center justify-center"
        style={{
          backgroundImage: `url('http://image.tmdb.org/t/p/w500${movie.backdrop_path}')`, backgroundRepeat: "no-repeat", backgroundSize: "cover"
        }}
      >
        <img
          className="rounded-md"
          src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />

        <div className="text-white">
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
        </div>

      </div>
    </>
  );
}
