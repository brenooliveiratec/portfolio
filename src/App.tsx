import Header from "./components/Header";
import ConstructionScene from "./components/ConstructionScene";
import Hero from "./sections/Hero";
import About from "./sections/About";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <ConstructionScene />
        <About />
      </main>
    </>
  );
}

export default App;
