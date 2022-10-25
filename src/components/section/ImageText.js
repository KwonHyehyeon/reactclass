import React from "react";

function ImageText({ attr }) {
  return (
    <section
      id="imageTextType"
      className={`imageText__wrap ${attr[0]} ${attr[1]} ${attr[2]}`}
    >
      <h2 className="blind">다가오는 가을 코디 추천</h2>
      <div className={`imgText__inner ${attr[3]}`}>
        <div className="imgText__txt">
          <span>MOMENTO’s pick</span>
          <h3>
            다가오는 <br />
            가을 코디 추천
          </h3>
          <p>모멘토가 pick한 가을 색감 뿜뿜 코디 추천 지금 바로 공개합니다!</p>
          <ul>
            <li>
              <a href="/">셔츠 + 핀턱 슬랙스 + 로퍼/운동화</a>
            </li>
            <li>
              <a href="/">니트 + 골덴 숏팬츠 + 부츠</a>
            </li>
            <li>
              <a href="/">가디건 + 반팔 티셔츠 + 팬츠</a>
            </li>
            <li>
              <a href="/">캡모자 + 쉬폰 원피스 + 운동화</a>
            </li>
            <li>
              <a href="/">라이더 자켓 + 반팔 티셔츠 + 팬츠</a>
            </li>
            <li>
              <a href="/">트렌치코트 + 티셔츠 + 면팬츠</a>
            </li>
          </ul>
        </div>
        <div className="imgText__img img1">
          <a href="/">초가을 코디 보러가기</a>
        </div>
        <div className="imgText__img img2">
          <a href="/" class="blue">
            늦가을 코디 보러가기
          </a>
        </div>
      </div>
    </section>
  );
}

export default ImageText;
