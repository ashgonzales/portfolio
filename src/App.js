import React from "react";
import Hero from "../src/components/Hero/Hero";
import About from "../src/components/About/About";
import Projects from "../src/components/Projects/Projects";
import Skills from "../src/components/Skills/Skills";
import Footer from "../src/components/shared/Footer/Footer";
import "./App.css";

function App() {

  return (
    <div className="App">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
