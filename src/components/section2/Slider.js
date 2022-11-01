import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const imageTitle = {
    smallTitle: "STORE",
    title: "MOMENTO’ s style",
    desc1: '#모멘토는 스페인어로 "순간" 이라는 뜻으로,' ,
    desc2: '당신의 아름다운 순간을 선물해드립니다.',
    btnLink: "/",
    btnClass1: "자세히보기",
    btnClass2: "쇼핑가기"
}

function Slider(props) {
  return (
    <section id="sliderType" className={`slider__inner ${props.fonts}`}>
      <div className="slider__inner">
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="desc">
              <span>{imageTitle.smallTitle}</span>
              <h3>{imageTitle.title}</h3>
              <p>
                {imageTitle.desc1}<br />
                {imageTitle.desc2}
              </p>
              <div className="btn">
                <a href={`${imageTitle.btnLink}`}>{imageTitle.btnClass1}</a>
                <a href={`${imageTitle.btnLink}`} className="black">
                {imageTitle.btnClass2}
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="desc">
              <span>{imageTitle.smallTitle}</span>
              <h3>{imageTitle.title}</h3>
              <p>
                {imageTitle.desc1}<br />
                {imageTitle.desc2}
              </p>
              <div className="btn">
                <a href={`${imageTitle.btnLink}`}>{imageTitle.btnClass1}</a>
                <a href={`${imageTitle.btnLink}`} className="black">
                {imageTitle.btnClass2}
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="desc">
              <span>{imageTitle.smallTitle}</span>
              <h3>{imageTitle.title}</h3>
              <p>
                {imageTitle.desc1}<br />
                {imageTitle.desc2}
              </p>
              <div className="btn">
                <a href={`${imageTitle.btnLink}`}>{imageTitle.btnClass1}</a>
                <a href={`${imageTitle.btnLink}`} className="black">
                {imageTitle.btnClass2}
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Slider;
