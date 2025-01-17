import React from "react";
import "./style.css";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules"; // Adjusted import path

function Card({ card }) {
  return (
    <div className="card-box-custom">
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        loop={true}
        mousewheel={true}
        cssMode={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]} // Ensure the modules are correctly referenced
        className="swiper-container-custom"
      >
        {card.imgSrc.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} className="card-img-custom" alt={`Slide ${i}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="card-info-flex-custom">
        <div>
          <h3 className="card-title">{card.title}</h3>
          <p style={{ margin: 0, color: "var(--font-grey)" }}>{card.desc}</p>
          <p style={{ margin: 0, color: "var(--font-grey)" }}>Location: {card.location}</p>
        </div>
        <div className="card-rating-custom">
          <StarRateRoundedIcon style={{ fontSize: "1.2rem" }} />
          <p style={{ margin: 0, paddingLeft: "0.25rem" }}>{card.rating}</p>
        </div>
      </div>
      <p style={{ margin: "0.2rem", fontSize: "1rem", color: "var(--black)" }}>
        <span style={{ fontWeight: "600" }}>₹{card.price}</span> night
      </p>
    </div>
  );
}

export default Card;