import React from "react";

const cardTitle = {
  title: "이 달의 마켓",
  desc: "MOMENTO’s가 pick해 온 의류 품목들을 공개합니다."
};
const cardText = [
  {
    imgClass: (
      <img src="assets/img/card_bg01.jpg" alt="코듀로이 팬츠" />
    ),
    title: "코듀로이 팬츠",
    desc: "가을하면 코듀로이, 코듀로이하면 가을로 그만큼 대표적인 가을 소재라고 할 수 있는 코듀로이 팬츠를 가져왔습니다. 요즘 팬츠 색상이 다양한 게 트렌드인 만큼 여러 색상을 가져왔는데.........",
    btnClass: "더 자세히 보기",
    btnLink: "/",
    svg: (
        <svg
        width="65"
        height="8"
        viewBox="0 0 65 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z"
          fill="black"
        />
      </svg>
    )
  },
  {
    imgClass: (
      <img src="assets/img/card_bg02.jpg" alt="블라우스" />
    ),
    title: "블라우스",
    desc: "가을하면 빠질 수 없는 블라우스도 가져왔는데 여리여리 느낌을 줄 수 있는 블라우스를 가져오고 싶어서 레이스가 포인트인 블라우스를 가져왔습니다. 구김이 잘 가지 않는 소재로 데려왔......",
    btnClass: "더 자세히 보기",
    btnLink: "/",
    svg: (
      <svg
        width="65"
        height="8"
        viewBox="0 0 65 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z"
          fill="black"
        />
      </svg>
    )
  },
  {
    imgClass: (
      <img src="assets/img/card_bg03.jpg" alt="트렌치코트" />
    ),
    title: "트렌치 코트",
    desc: "가을하면 모두 트렌치 코트를 떠올리시잖아요? 그래서 가져왔습니다. 자칫하면 촌스러워보일 수 있는 색감의 트렌치코트는 제외하고 탄탄하고 오래 입을 수 있는 트렌치코트로 데려왔습니다.",
    btnClass: "더 자세히 보기",
    btnLink: "/",
    svg: (
      <svg
        width="65"
        height="8"
        viewBox="0 0 65 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z"
          fill="black"
        />
      </svg>
    )
  }
];
const CardInfo = ({imgClass, title, desc, btnClass, btnLink, svg}) => {
  return (
    <article className="card">
      <figure className="card__header">
        {imgClass}
      </figure>
      <div className="card__body">
        <h3 className="tit">{title}</h3>
        <p className="desc">
        {desc}
        </p>
        <a className="btn" href={`${btnLink}`}>
          {btnClass}
          <span aria-hidden="true">
            {svg}
          </span>
        </a>
      </div>
    </article>
  );
};
function Card({ attr }) {
  return (
    <section
      id="cardType"
      className={`card__wrap ${attr[0]} ${attr[1]} ${attr[2]}`}
    >
      <h2>{cardTitle.title}</h2>
      <p>{cardTitle.desc}</p>
      <div className={`card__inner ${attr[3]}`}>
        {cardText.map((info, index) => (
          <CardInfo 
          key={index}
          imgClass = {info.imgClass} 
          title = {info.title} 
          desc={info.desc} 
          btnClass={info.btnClass}
          btnLink={info.btnLink}
          svg={info.svg}
          />
        ))}
        {/* <article className="card">
          <figure className="card__header">
            <img src="assets/img/card_bg01.jpg" alt="코듀로이 팬츠" />
          </figure>
          <div className="card__body">
            <h3 className="tit">코듀로이 팬츠</h3>
            <p className="desc">
              가을하면 코듀로이, 코듀로이하면 가을로 그만큼 대표적인 가을
              소재라고 할 수 있는 코듀로이 팬츠를 가져왔습니다. 요즘 팬츠 색상이
              다양한 게 트렌드인 만큼 여러 색상을 가져왔는데.........
            </p>
            <a className="btn" href="/">
              더 자세히 보기
              <span aria-hidden="true">
                <svg
                  width="65"
                  height="8"
                  viewBox="0 0 65 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z"
                    fill="black"
                  />
                </svg>
              </span>
            </a>
          </div>
        </article>
        <article className="card">
          <figure className="card__header">
            <img src="assets/img/card_bg02.jpg" alt="코끼리" />
          </figure>
          <div className="card__body">
            <h3 className="tit">블라우스</h3>
            <p className="desc">
              가을하면 빠질 수 없는 블라우스도 가져왔는데 여리여리 느낌을 줄 수
              있는 블라우스를 가져오고 싶어서 레이스가 포인트인 블라우스를
              가져왔습니다. 구김이 잘 가지 않는 소재로 데려왔......
            </p>
            <a className="btn" href="/">
              더 자세히 보기
              <span aria-hidden="true">
                <svg
                  width="65"
                  height="8"
                  viewBox="0 0 65 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z"
                    fill="black"
                  />
                </svg>
              </span>
            </a>
          </div>
        </article>
        <article className="card">
          <figure className="card__header">
            <img src="assets/img/card_bg03.jpg" alt="돌고래" />
          </figure>
          <div className="card__body">
            <h3 className="tit">트렌치 코트</h3>
            <p className="desc">
              가을하면 모두 트렌치 코트를 떠올리시잖아요? 그래서 가져왔습니다.
              자칫하면 촌스러워보일 수 있는 색감의 트렌치코트는 제외하고
              탄탄하고 오래 입을 수 있는 트렌치코트로 데려왔습니다.
            </p>
            <a className="btn" href="/">
              더 자세히 보기
              <span aria-hidden="true">
                <svg
                  width="65"
                  height="8"
                  viewBox="0 0 65 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z"
                    fill="black"
                  />
                </svg>
              </span>
            </a>
          </div>
        </article> */}
      </div>
    </section>
  );
}

export default Card;
