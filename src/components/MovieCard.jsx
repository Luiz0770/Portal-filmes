import { Link } from "react-router-dom";

export default function MovieCard({titulo, imagem_destaque, id}) {
    return(
        <>
            <div className="flex flex-col flex-wrap content-center justify-center text-center">
                <h3 className="my-2">{titulo}</h3>
                <img className="w-52" src={`/${imagem_destaque}`}/>
                <Link className="mt-2 bg-cyan-950 text-white rounded" to={`/movies/${id}`}>Ver Mais!</Link>
            </div>
        </>
    )

}