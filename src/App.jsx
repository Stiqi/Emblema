import { useEffect, useState } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Landing from "./components/Landing/Landing.jsx";
import Footer from "../src/components/Footer/Footer.jsx";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import About from "./components/About/About";

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
            <Route
              exact
              path={"/category/:categoryId"}
              element={<CategoryPage />}
            />
            <Route exact path={"/about"} element={<About />} />
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
