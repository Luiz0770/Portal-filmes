import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import CastCard from "./CastCard";

export default function CarroselCast({ cast }) {

    return (
        <>
            <div className="">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={8}
                    breakpoints={{ 320: { slidesPerView: 1 }, 550: { slidesPerView: 2 }, 768: { slidesPerView: 4 }, 1100: { slidesPerView: 5 }, 1336: { slidesPerView: 6 } }}
                >
                    {cast
                        .filter(ator => ator.profile_path) // Filtra apenas atores que possuem imagem
                        .map(ator => (
                            <SwiperSlide key={ator.id}>
                                <CastCard ator={ator} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </>
    );
}
