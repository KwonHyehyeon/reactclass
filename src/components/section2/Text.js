import React from "react";

const textTitle = {
  smallTitle:"MOMENTO’s",
  title:"SNS : MOMENTO’s LOOK"
};

const textText = [
  {
    textClass:"t1",
    title:"페이스북",
    desc:"MOMENTO의 룩북영상과 홍보영상을 볼 수 있으며 매달 마켓 상품 품목들을 실시간으로 확인하실 수 있습니다.",
    btnClass: "바로가기",
    btnLink: "/"
  },
  {
    textClass:"t2",
    title:"인스타",
    desc:"MOMENTO의 실시간 라이브 영상을 볼 수 있으며 고객님들의 리뷰사진을 스토리에 공유합니다.",
    btnClass: "바로가기",
    btnLink: "/"
  },
  {
    textClass:"t3",
    title:"유튜브",
    desc:"MOMENTO의 실시간 라이브 영상을 볼 수 있으며 촬영 비하인드 영상도 볼 수 있습니다. 그 외의 영상 계획도 있습니다.",
    btnClass: "바로가기",
    btnLink: "/"
  },
  {
    textClass:"t4",
    title:"카카오톡",
    desc:"MOMENTO의 CS를 맡고 있으며 문의를 하고 싶으실 때 카카오톡을 통해 문의를 주시면 신속하게 답변하고 있습니다.",
    btnClass: "바로가기",
    btnLink: "/"
  },
  {
    textClass:"t5",
    title:"트위터",
    desc:"MOMENTO 신상컷들을 업데이트 하고 있으며 업데이트 소식을 보다 빠르게 확인 할 수 있습니다.",
    btnClass: "바로가기",
    btnLink: "/"
  },
  {
    textClass:"t6",
    title:"네이버 블로그",
    desc:"MOMENTO 공지사항이나 이벤트 소식 등을 전달하는 곳입니다. 추후에 진행할 플리마켓 공지도 여기서 확인할 수 있습니다.",
    btnClass: "바로가기",
    btnLink: "/"
  }
];
const TextInfo = ({textClass, title, desc, btnClass, btnLink}) => {
  return (
    <div className={`text ${textClass}`}>
      <h3 className="text__title">{title}</h3>
      <p className="text__desc">
        {desc}
      </p>
      <a className="text__btn" href={`${btnLink}`}>
        {btnClass}
      </a>
    </div>
  );
};

function Text(props) {
  return (
    <section
      id="textType"
      className={`text__wrap ${props.attr[0]} ${props.attr[1]}`}
    >
      <span>{textTitle.smallTitle}</span>
      <h2 className="mb70">{textTitle.title}</h2>
      <div className={`text__inner ${props.attr[2]}`}>
        {textText.map((info, index) => (
          <TextInfo 
          key={index}
          textClass = {info.textClass} 
          title={info.title} 
          desc={info.desc} 
          btnClass={info.btnClass}
          btnLink={info.btnLink}
          />
        ))}
        {/* <div className="text t1">
          <h3 className="text__title">페이스북</h3>
          <p className="text__desc">
            MOMENTO의 룩북영상과 홍보영상을 볼 수 있으며 매달 마켓 상품 품목들을
            실시간으로 확인하실 수 있습니다.
          </p>
          <a className="text__btn" href="/">
            바로가기
          </a>
        </div>
        <div className="text t2">
          <h3 className="text__title">인스타</h3>
          <p className="text__desc">
            MOMENTO의 실시간 라이브 영상을 볼 수 있으며 고객님들의 리뷰사진을
            스토리에 공유합니다.
          </p>
          <a className="text__btn" href="/">
            바로가기
          </a>
        </div>
        <div className="text t3">
          <h3 className="text__title">유튜브</h3>
          <p className="text__desc">
            MOMENTO의 실시간 라이브 영상을 볼 수 있으며 촬영 비하인드 영상도 볼
            수 있습니다. 그 외의 영상 계획도 있습니다.
          </p>
          <a className="text__btn" href="/">
            바로가기
          </a>
        </div>
        <div className="text t4">
          <h3 className="text__title">카카오톡</h3>
          <p className="text__desc">
            MOMENTO의 CS를 맡고 있으며 문의를 하고 싶으실 때 카카오톡을 통해
            문의를 주시면 신속하게 답변하고 있습니다.
          </p>
          <a className="text__btn" href="/">
            바로가기
          </a>
        </div>
        <div className="text t5">
          <h3 className="text__title">트위터</h3>
          <p className="text__desc">
            MOMENTO 신상컷들을 업데이트 하고 있으며 업데이트 소식을 보다 빠르게
            확인 할 수 있습니다.
          </p>
          <a className="text__btn" href="/">
            바로가기
          </a>
        </div>
        <div className="text t6">
          <h3 className="text__title">네이버 블로그</h3>
          <p className="text__desc">
            MOMENTO 공지사항이나 이벤트 소식 등을 전달하는 곳입니다. 추후에
            진행할 플리마켓 공지도 여기서 확인할 수 있습니다.
          </p>
          <a className="text__btn" href="/">
            바로가기
          </a>
        </div> */}
      </div>
    </section>
  );
}

export default Text;
