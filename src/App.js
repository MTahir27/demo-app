import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="Services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
