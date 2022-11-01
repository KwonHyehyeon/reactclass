import React from "react";

const bannerwrap = 
  {
    title:"MOMENTO는?",
    desc:"트렌드도 중요하지만 한 번 입고 옷장에 박혀있는 옷들 말고 편안하면서도 오래 입을 수 있는 유행타지 않는 옷들을 추구합니다.",
    btnLink: "/",
    smallName: "-MOMENTO 대표 드림-"
  }
;
function Banner(props) {
  return (
    <section id="bannerType" className={`banner__wrap ${props.fonts}`}>
      <h2 className="blind">배너 영역</h2>
      <div className="banner__inner">
        <h3 className="title">{bannerwrap.title}</h3>
        <p className="desc">
          {bannerwrap.desc}
          <a href={`${bannerwrap.btnLink}`} title="유튜브 페이지로 이동">l</a>
        </p>
        <span className="small">{bannerwrap.smallName}</span>
      </div>
    </section>
  );
}

export default Banner;
