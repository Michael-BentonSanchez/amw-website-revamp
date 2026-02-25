import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Staff from "./pages/Staff";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import MainSite from "./pages/MainSite";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/staff" element={<Staff />} />
      </Routes>
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
