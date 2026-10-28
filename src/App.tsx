import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Technologies from "./sections/Technologies";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import ConstructionScene from "./components/ConstructionScene";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Technologies />
        <ConstructionScene />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}

export default App;
