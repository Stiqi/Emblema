import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import PageContent from "./components/PageContent/PageContent.jsx";

function App() {
  return (
    <>
      <header>
        <Hero />
      </header>
      <Navbar />
      <PageContent />
    </>
  );
}

export default App;
