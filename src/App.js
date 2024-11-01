import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer"; // Ensure this is capitalized
import Blog from "./components/Blog";
import About from "./components/About";
import TechShekk from "./components/TechShekk";
import Carousal from "./components/Carousal";
import EthicalHacking from "./components/EthicalHacking";
import CyberCrime from "./components/CyberCrime";
import BestPractices from "./components/BestPractices";

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
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <Carousal />
              <TechShekk />
            </>
          }
        />

        {/* Blog and About Routes */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />

        {/* Dropdown Menu Routes */}
        <Route path="/ethical-hacking" element={<EthicalHacking />} />
        <Route path="/cyber-crime" element={<CyberCrime />} />
        <Route path="/best-practices" element={<BestPractices />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
