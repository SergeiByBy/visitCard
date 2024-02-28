import React from "react";
import dungeon from "../img/dungeon.jpg";
const Articles = () => {
  return (
    <>
      <section
        className="main-section"
        style={{ backgroundImage: `url(${dungeon})` }}
      >
        <div className="main-section__content">
          <h2 className="main-section__header">Ключевые навыки:</h2>
          <ul>
            <li>html</li>
            <li>css</li>
            <li>js</li>
            <li>react</li>
            <li>react-router-dom</li>
            <li>redux-toolkit</li>
            <li>figma, pixso</li>
            <li>git,github</li>
            <li>sass,less</li>
            <li>bootstrap</li>
            <li>material-ua</li>
          </ul>
        </div>
        <div className="copy">®Кириллин Сергей</div>
      </section>
    </>
  );
};

export default Articles;
