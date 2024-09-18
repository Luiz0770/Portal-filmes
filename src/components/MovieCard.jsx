import { Link } from "react-router-dom";

export default function MovieCard({titulo, imagem_destaque, id}) {
    return(
        <>
            <div className="flex flex-col flex-wrap content-center justify-center text-center">
                <h3>{titulo}</h3>
                <img className="w-52" src={`/${imagem_destaque}`}/>
                <Link to={`/movies/${id}`}>Ver Mais!</Link>
            </div>
        </>
    )

}