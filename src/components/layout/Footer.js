import React from "react";

function Footer({ attr }) {
  return (
    <footer
      id="footerType"
      className={`footer__wrap ${attr[0]} ${attr[1]} ${attr[2]}`}
    >
      <h2 className="blind">푸터 영역</h2>
      <div className={`footer__inner ${attr[3]}`}>
        <div className="footer__menu">
          <div>
            <h3>MENU</h3>
            <ul>
              <li>
                <a href="/">OUTER</a>
              </li>
              <li>
                <a href="/">TOP</a>
              </li>
              <li>
                <a href="/">BOTTOM</a>
              </li>
              <li>
                <a href="/">DRESS</a>
              </li>
              <li>
                <a href="/">ACC</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>SHOP GUIDE</h3>
            <ul>
              <li>
                <a href="/">이용 약관</a>
              </li>
              <li>
                <a href="/">이용 안내</a>
              </li>
              <li>
                <a href="/">개인정보취급방침</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>MEMBERSHIP</h3>
            <ul>
              <li>
                <a href="/">로그인</a>
              </li>
              <li>
                <a href="/">회원가입</a>
              </li>
              <li>
                <a href="/">마이페이지</a>
              </li>
              <li>
                <a href="/">주문조회</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>BANK ACCOUNT</h3>
            <ul>
              <li>
                <a href="/">신한 : 123-4567-890</a>
              </li>
              <li>
                <a href="/">예금주 : (주)모멘토컴퍼니 </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>ABOUT US</h3>
            <ul>
              <li>
                <a href="/">company.(주)모멘토컴퍼니</a>
              </li>
              <li>
                <a href="/">owner. 권혜현</a>
              </li>
              <li>
                <a href="/">tel. 031-123-4567</a>
              </li>
              <li>
                <a href="/">business no. 123-45-67</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>SNS</h3>
            <ul>
              <li>
                <a href="/">페이스북</a>
              </li>
              <li>
                <a href="/">인스타</a>
              </li>
              <li>
                <a href="/">유튜브</a>
              </li>
              <li>
                <a href="/">카카오톡</a>
              </li>
              <li>
                <a href="/">트위터</a>
              </li>
              <li>
                <a href="/">네이버 블로그</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__right">
          2022 NOEYHEYH. This is hyeon's Portfolio
          <br />
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
