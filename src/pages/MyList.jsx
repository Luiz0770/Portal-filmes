import { useEffect, useState } from "react";
import CardContainer from "../components/CardContainer";
import Carrosel from "../components/Carrosel";

export default function MyList() {

    const [filmesAssistido, setFilmesAssistidos] = useState([])
    const [filmesParaAssistir, setFilmesParaAssistir] = useState([])

    useEffect(() => {
        const LSAssistidos = JSON.parse(localStorage.getItem("filmesVistos")) || [];
        setFilmesAssistidos(LSAssistidos)

        const LSAssitir = JSON.parse(localStorage.getItem("filmesAssistir")) || [];
        setFilmesParaAssistir(LSAssitir)

    }, [])

    console.log(filmesAssistido)

    return (
        <>
            <div className="px-10">
                <div>
                    <CardContainer label={"Filmes Assistidos:"}>
                        <Carrosel movies={filmesAssistido} />
                    </CardContainer>
                </div>
                <div>
                    <CardContainer label={"Filmes que Quero Assitir:"}>
                        <Carrosel movies={filmesParaAssistir} />
                    </CardContainer>
                </div>
            </div>
        </>
    );
}