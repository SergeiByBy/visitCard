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
          <h2 className="main-section__header">Ключевые навыки</h2>
          <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
          </ul>
        </div>
        <div className="copy">®webDesing Master</div>
      </section>
    </>
  );
};

export default Articles;
