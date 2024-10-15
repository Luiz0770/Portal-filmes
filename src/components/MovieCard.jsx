import { Link } from "react-router-dom";

export default function MovieCard({title, poster_path, id}) {
    return(
        <>
            <div className="flex flex-col flex-wrap items-center justify-center text-center">
                <h3 className="text-lg font-semibold my-2 w-4/6">{title}</h3>
                <img className="rounded-md" src={`http://image.tmdb.org/t/p/w500${poster_path}`}/>
                <Link className="mt-2 bg-cyan-950 text-white rounded py-2 px-12" to={`/movies/${id}`}>Ver Mais!</Link>
            </div>
        </>
    )

}