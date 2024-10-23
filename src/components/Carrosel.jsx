import { Swiper, SwiperSlide } from "swiper/react";

import MovieCard from "./MovieCard";

// Import Swiper styles
import "swiper/css";

export default function Carrosel({ movies }) {
  console.log(movies);

  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={5}
      >
        {movies.map(movie => <SwiperSlide><MovieCard title={movie.title} poster_path={movie.poster_path} id={movie.id}/></SwiperSlide>)}
      </Swiper>
    </>
  );
}