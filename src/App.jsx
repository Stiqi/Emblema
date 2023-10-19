import { useEffect, useState } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Landing from "./components/Landing/Landing.jsx";
import Footer from "../src/components/Footer/Footer.jsx";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 1500);
  }, []);

  return (
    <>
      {showContent ? (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path={"/"} element={<Landing />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      ) : (
        <Hero />
      )}
    </>
  );
}

export default App;
