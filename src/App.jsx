import { useEffect, useState } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import PageContent from "./components/PageContent/PageContent.jsx";
import Footer from "../src/components/Footer/Footer.jsx";

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
        <>
          <Navbar />
          <PageContent />
          <Footer />
        </>
      ) : (
        <Hero />
      )}
    </>
  );
}

export default App;
