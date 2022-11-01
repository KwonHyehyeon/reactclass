import React from "react";

function Header(props) {
  return (
    <header id="headerType" className={`header__wrap ${props.fonts}`}>
      <div className="header__inner">
        <div className="header__logo">
          <a href="/">
            MOMENTO <em>store</em>
          </a>
        </div>
        <div className="header__menu">
          <ul>
            <li>
              <a href="#sliderType">main</a>
            </li>
            <li>
              <a href="#imageType">best</a>
            </li>
            <li>
              <a href="#imageTextType">codi</a>
            </li>
            <li>
              <a href="#cardType">product</a>
            </li>
            <li>
              <a href="#bannerType">brand</a>
            </li>
            <li>
              <a href="#textType">SNS</a>
            </li>
          </ul>
        </div>
        <div className="header__member">
          <a href="/">로그인</a>
        </div>
        <div className="header__ham">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
