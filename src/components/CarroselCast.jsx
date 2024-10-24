import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function Carrosel({ cast }) {
    console.log(cast);

    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={6}
            >
                {cast.map(ator => (
                    <SwiperSlide key={ator.name}>
                        <div>
                            {
                                ator.profile_path ? (
                                    <img
                                        src={`https://image.tmdb.org/t/p/w300${ator.profile_path}`}
                                        alt={ator.name}
                                    />
                                ) : null
                            }

                            <h3>{ator.name}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
