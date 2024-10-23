import { useEffect, useState } from "react";
import CardContainer from "../components/CardContainer";
import Carrosel from "../components/Carrosel";
import Banner from "../components/Banner";
import { dotWave } from 'ldrs'

dotWave.register()

export default function Home() {
  const [moviesPopular, setMoviesPopular] = useState([]);
  const [movieComming, setMovieComming] = useState([]);
  const [series, setSeries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchPopular = await fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=f60febf3e7bf76f4314496086bf8c249&language=pt-br"
        );

        const fetchComming = await fetch(
          "https://api.themoviedb.org/3/movie/upcoming?api_key=f60febf3e7bf76f4314496086bf8c249&language=pt-br"
        );

        const fetchSeries = await fetch(
          "https://api.themoviedb.org/3/tv/popular?api_key=f60febf3e7bf76f4314496086bf8c249&language=pt-br"
        );

        if (!fetchPopular.ok || !fetchComming.ok) {
          throw new Error("Falha ao buscar os dados");
        }

        const resPopular = await fetchPopular.json();
        const resComming = await fetchComming.json();
        const resSeries = await fetchSeries.json();

        setMoviesPopular(resPopular.results);
        setMovieComming(resComming.results);
        setSeries(resSeries.results);
      } catch {
        (erro) => console.log(erro);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return isLoading ? <div className="h-screen flex justify-center items-center"><l-dot-wave size="47" speed="1" color="black"/></div> : (
    <>
      <Banner />
      <div>
        <CardContainer label={"Filmes Populares"}>
          <Carrosel movies={moviesPopular} />
        </CardContainer>
      </div>

      <div>
        <CardContainer label={"Filmes que estão por vir!"}>
          <Carrosel movies={movieComming} />
        </CardContainer>
      </div>

      <div>
        <CardContainer label={"Series Populares"}>
          <Carrosel movies={series} />
        </CardContainer>
      </div>
    </>
  )
}
