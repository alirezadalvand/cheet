import React from "react";
import HomePage from "./HomePage";
import CoursePage from "./CoursePage";
import AboutPage from "./AboutPage";

const Header = () => {
  function header() {
    const route = window.location.pathname;
    if (route === "/") return <HomePage />;
    if (route === "/courses") return <CoursePage />;
    if (route === "/about") return <AboutPage />;
  }

  return (
    <nav className="container-fluid">
      <a href="/">Home</a> | <a href="/courses">Course page</a> |{" "}
      <a href="/about">About us</a> {header()}
    </nav>
  );
};

export default Header;
