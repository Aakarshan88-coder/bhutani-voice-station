import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import AboutPage from "./Pages/AboutPage";
import VoicePage from "./Pages/VoicePage";
import ServicesPage from "./Pages/ServicesPage";
import WorkPage from "./Pages/WorkPage";
import ContactPage from "./Pages/ContactPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/voice" element={<VoicePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;