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
      <Header />
      <Articles />
    </>
  );
};

export default App;
