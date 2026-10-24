import Header from "./components/Header";
import Hero from "./sections/Hero";
import Technologies from "./sections/Technologies";
import ConstructionScene from "./components/ConstructionScene";
import About from "./sections/About";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Technologies />
        <ConstructionScene />
        <About />
      </main>
    </>
  );
}

export default App;
