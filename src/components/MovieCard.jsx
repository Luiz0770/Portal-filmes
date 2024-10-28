import { Link } from "react-router-dom";

export default function MovieCard({ title, poster_path, id }) {
  return (
    <>
      <Link
        to={`/movies/${id}`}
        className="flex flex-col items-center justify-center text-center transition duration-300 ease-in-out hover:scale-105"
      >
        <h3 className="text-lg font-semibold my-2 w-4/6 truncate max-w-full">
          {title}
        </h3>
        <img
          className="rounded-md object-cover"
          src={`http://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
      </Link>
    </>
  );
}
