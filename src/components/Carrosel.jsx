import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Carrosel({ movies }) {

  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        spaceBetween={50}
        breakpoints={
          {
            320: { slidesPerView: 1 },
            550: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            1100: { slidesPerView: 5 },
          }}
      >
        {
          movies.map
            (movie => <SwiperSlide key={movie.id} className="p-3">
              <MovieCard title={movie.title || movie.name} poster_path={movie.poster_path} id={movie.id} />
            </SwiperSlide>
            )
        }
      </Swiper>
    </>
  );
}
