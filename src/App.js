import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer"; // Ensure this is capitalized
import Blog from "./components/Blog";
import About from "./components/About";
import TechShekk from "./components/TechShekk";
import Carousal from "./components/Carousal";

const App = () => {
  return (
    <Router>
      <Navbar
        title="TechShekk"
        Home="Technologies"
        Blog="Blogs"
        Categories="Cyber-Security"
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carousal />
              <TechShekk />
            </>
          }
        />
        <Route path="/blog" element={<Blog />} /> {/* Blog route */}
        <Route path="/about" element={<About />} />
        {/* Additional routes can be added here if necessary */}
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
