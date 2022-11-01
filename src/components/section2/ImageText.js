import React from "react";

const imagetextTitle = {
  smalltitle:"MOMENTO’s pick",
  title:"다가오는 가을 코디 추천",
  desc:"모멘토가 pick한 가을 색감 뿜뿜 코디 추천 지금 바로 공개합니다!",
  list1:"셔츠 + 핀턱 슬랙스 + 로퍼/운동화",
  list2:"니트 + 골덴 숏팬츠 + 부츠",
  list3:"가디건 + 반팔 티셔츠 + 팬츠",
  list4:"캡모자 + 쉬폰 원피스 + 운동화",
  list5:"라이더 자켓 + 반팔 티셔츠 + 팬츠",
  list6:"트렌치코트 + 티셔츠 + 면팬츠",
  btnLink:"/"
}

const imagetextImg = [
  {
    title:"초가을 코디 보러가기",
    imgClass: "img1",
    btnLink: "/"
  },
  {
    title:"늦가을 코디 보러가기",
    imgClass: "img2",
    btnLink: "/"
  }
] ;
const ImgtextInfo = ({title, imgClass, btnLink}) => {
  return (
      <div className={`imgText__img ${imgClass}`}>
        <a href={`${btnLink}`}>{title}</a>
      </div>
  );
};

function ImageText({ attr }) {
  return (
    <section
      id="imageTextType"
      className={`imageText__wrap ${attr[0]} ${attr[1]} ${attr[2]}`}
    >
      <h2 className="blind">{imagetextTitle.title}</h2>
      <div className={`imgText__inner ${attr[3]}`}>
        <div className="imgText__txt">
          <span>{imagetextTitle.smalltitle}</span>
          <h3>
            {imagetextTitle.title}
          </h3>
          <p>{imagetextTitle.desc}</p>
          <ul>
            <li>
              <a href={`${imagetextTitle.btnLink}`}>{imagetextTitle.list1}</a>
            </li>
            <li>
              <a href={`${imagetextTitle.btnLink}`}>{imagetextTitle.list2}</a>
            </li>
            <li>
              <a href={`${imagetextTitle.btnLink}`}>{imagetextTitle.list3}</a>
            </li>
            <li>
              <a href={`${imagetextTitle.btnLink}`}>{imagetextTitle.list4}</a>
            </li>
            <li>
              <a href={`${imagetextTitle.btnLink}`}>{imagetextTitle.list5}</a>
            </li>
            <li>
              <a href={`${imagetextTitle.btnLink}`}>{imagetextTitle.list6}</a>
            </li>
          </ul>
        </div>
          {
            imagetextImg.map((info, index) => (
              <ImgtextInfo
              key={index}
              title={info.title}
              imgClass={info.imgClass}
              btnLink={info.btnLink}
              />
            ))
          }
        {/* <div className="imgText__img img1">
          <a href="/">초가을 코디 보러가기</a>
        </div>
        <div className="imgText__img img2">
          <a href="/" className="blue">
            늦가을 코디 보러가기
          </a>
        </div> */}
      </div>
    </section>
  );
}

export default ImageText;
