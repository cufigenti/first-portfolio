import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Pages/Home";
import { About } from "./Components/Pages/About";
import { Blog } from "./Components/Pages/Blog";
import { Contact } from "./Components/Pages/Contact";



function App() {


  return (
    
    <>
      <Router>
        <Navbar />

        <div className="pages">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

      </Router>
    </>
  );
}

export default App;
