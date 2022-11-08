import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./component/Header";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./component/Footer";
import "./assets/fonts.css";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/React-Portfolio" element={<Home />} />
            <Route path="/React-Portfolio/about" element={<About />} />
            <Route path="/React-Portfolio/projects" element={<Projects />} />
            <Route path="/React-Portfolio/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
