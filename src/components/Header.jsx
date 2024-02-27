import React from "react";
import base from "../img/layer-base.png";
import middle from "../img/layer-middle.png";
import front from "../img/layer-front.png";
const Header = () => {
  return (
    <>
      <header className="main-header">
        <div className="layers">
          <div className="layer__header">
            <h1 className="layers__caption">
              Добро пожаловать! <br /> Это сайт-визитка Кириллина Сергея
            </h1>
            <p className="layers__title">Волшебный лес</p>
          </div>
          <div
            className="layer layers__base"
            style={{ backgroundImage: `url(${base})` }}
          ></div>
          <div
            className="layer layers__middle"
            style={{ backgroundImage: `url(${middle})` }}
          ></div>
          <div
            className="layer layers__front"
            style={{ backgroundImage: `url(${front})` }}
          ></div>
        </div>
      </header>
    </>
  );
};

export default Header;
