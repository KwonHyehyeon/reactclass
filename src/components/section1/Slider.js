import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
              <span>STORE</span>
              <h3>MOMENTO’ s style</h3>
              <p>
                #모멘토는 스페인어로 “순간" 이라는 뜻으로,
                <br />
                당신의 아름다운 순간을 선물해드립니다.
              </p>
              <div className="btn">
                <a href="/">자세히보기</a>
                <a href="/" className="black">
                  쇼핑가기
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="desc">
              <span>STORE</span>
              <h3>MOMENTO’ s style</h3>
              <p>
                #모멘토는 스페인어로 “순간" 이라는 뜻으로,
                <br />
                당신의 아름다운 순간을 선물해드립니다.
              </p>
              <div className="btn">
                <a href="/">자세히보기</a>
                <a href="/" className="black">
                  쇼핑가기
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="desc">
              <span>STORE</span>
              <h3>MOMENTO’ s style</h3>
              <p>
                #모멘토는 스페인어로 “순간" 이라는 뜻으로,
                <br />
                당신의 아름다운 순간을 선물해드립니다.
              </p>
              <div className="btn">
                <a href="/">자세히보기</a>
                <a href="/" className="black">
                  쇼핑가기
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
