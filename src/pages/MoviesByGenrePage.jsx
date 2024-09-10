import { useParams } from "react-router-dom"

export default function MoviesByGenrePage(){

    const { id } = useParams()

    return(
        <>
        <h1>Movies By Genre Page</h1>
        <h1>O ID é: {id}</h1>
        {/*Lista todos os filmes do gênero selecionado pelo usuário. */}
        </>
    )
}