import React from "react";

function IMAGE(props) {
  return (
    <section
      id="imageType"
      className={`image__wrap ${props.attr[0]} ${props.attr[1]}`}
    >
      <h2>이 달의 BEST</h2>
      <p>9월 가장 인기가 많았던 제품 TOP 2 를 지금 바로 소개합니다.</p>
      <div className={`image__inner ${props.attr[2]}`}>
        <article className="image img1">
          <h2 className="image__title">brin tweed jacket</h2>
          <p className="image__desc">
            “브린 트위드 자켓" 은 화이트톤과 아이보리 톤의 조화로 체크무늬가
            들어간 자켓으로, 하객룩으로 인기가 많은 제품입니다.
          </p>
          <a className="image__btn" href="/" title="상세 보기">
            상세 보기
          </a>
        </article>
        <article className="image img2">
          <h3 className="image__title">cross denim pants</h3>
          <p className="image__desc">
            “크로스 데님 팬츠" 는 사선 버튼이 포인트인 청바지로 요즘 대세인
            와이드 형태의 팬츠입니다. 사계절 내내 착용하실 수 있습니다.
          </p>
          <a className="image__btn green" href="/" title="상세 보기">
            상세 보기
          </a>
        </article>
      </div>
    </section>
  );
}

export default IMAGE;
