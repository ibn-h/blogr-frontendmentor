import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Feature from "./components/feature";
import SecondFeature from "./components/secondFeature";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="rounded-bl-[6rem] bg-red-500 bg-[url('./assets/bg-pattern-intro-desktop.svg')] bg-cover bg-[25%_50%] bg-no-repeat text-white">
        <Header />
        <Hero />
      </div>

      <About />
      <Feature />
      <SecondFeature />
      <Footer />
    </>
  );
}

export default App;
