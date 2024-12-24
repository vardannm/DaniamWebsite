import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Partners from "./components/Partners";
import About from "./components/About";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/"  element={<Hero />}/>
          <Route path="/projects" element={<Projects />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
