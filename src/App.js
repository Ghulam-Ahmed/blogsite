import React from "react";
import "./App.css";
import Navbar from "./components/header";
import Footer from "./components/footer";
import Blog from "./components/Blog";
import About from "./components/About";
import TechShekk from "./components/TechShekk";

const App = () => {
  return (
    <>
      <Navbar
        title={<span style={{ fontWeight: "bold" }}>TechShekk</span>}
        Home="Technologies"
        Blog="Blogs"
        Categories="Cyber-Security"
      />

      <TechShekk />
      <Blog />
      <About />
      <Footer />
    </>
  );
};

export default App;
