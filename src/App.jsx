import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Partners from "./components/Partners";
import About from "./components/About";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Smooth scroll to the top of the page when location changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
