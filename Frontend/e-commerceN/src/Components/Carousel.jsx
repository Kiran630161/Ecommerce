import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// features
import { Navigation, Pagination, Autoplay } from "swiper/modules";

function Carousel() {

  // 🔥 LOCAL IMAGES
  const banners = [
    "/banner.jpg",
    "/banner2.jpg",
    "/banner3.jpg",
    "/banner4.jpg"
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
    >
      {banners.map((img, index) => (
        <SwiperSlide key={index}>
          
          <img
            src={img}
            alt="banner"
            style={{
              width: "100%",
              height: "500px",
              objectFit: "cover"
            }}
          />

        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;