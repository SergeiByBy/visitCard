import React from "react";
import "./styles/style.css";
import Header from "./components/Header";
import Articles from "./components/Articles";
const App = () => {
  window.addEventListener("scroll", (e) => {
    document.body.style.cssText = `--scrollTop: ${window.scrollY}px`;
  });
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <Header />
          <Articles />
        </div>
      </div>
    </>
  );
};

export default App;
