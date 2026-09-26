import BackToTop from "./components/common/BackToTop";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Education from "./components/sections/Education";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Stats from "./components/sections/Stats";
import TechStack from "./components/sections/TechStack";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechStack />
      <About />
      <Skills />
      <Projects />
      <Stats />
      <Education />
      <Contact />
      <Footer />
      <BackToTop/>
    </>
  );
}

export default App;
