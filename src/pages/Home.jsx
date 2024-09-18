import CardContainer from "../components/CardContainer";
import movies from "../data/movies.json";
import MovieCard from "../components/MovieCard";

export default function Home() {
  console.log(movies);

  return (
    <>
      <CardContainer label={"Filmes"}>
        {movies.map(movie => (
            <MovieCard key={movie.id} {...movie}/>
        ))}
      </CardContainer>

      {/* Filme do ano 200 */}
      <CardContainer label={"Filmes Antes de 2000"}>      
        {movies
        .filter(movie => movie.ano_lancamento < 2000)
        .map(movie => (
            <MovieCard key={movie.id} {...movie}/>
        ))}
      </CardContainer>

      {/* Filme do ano 200 */}
      <CardContainer label={"Melhores Avaliados"}>      
        {movies
        .filter(movie => movie.avaliacao >= 9)
        .map(movie => (
            <MovieCard key={movie.id} {...movie}/>
        ))}
      </CardContainer>
    </>
  );
}
