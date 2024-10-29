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
                        {filmesAssistido && filmesAssistido.length > 0 ?
                            <Carrosel movies={filmesAssistido} /> :
                            <p>Voce nao possui nenhum filme em sua lista</p>
                        }
                    </CardContainer>
                </div>
                <div>
                    <CardContainer label={"Filmes que Quero Assitir:"}>
                    {filmesParaAssistir && filmesParaAssistir.length > 0 ?
                            <Carrosel movies={filmesParaAssistir}/> :
                            <p>Voce nao possui nenhum filme em sua lista</p>
                        }
                    </CardContainer>
                </div>
            </div>
        </>
    );
}