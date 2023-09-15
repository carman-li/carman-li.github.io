import React from "react";
import "./App.css";
import SectionHeading from "./components/SectionHeading";
import Landing from "./components/Landing";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

import typingCat from "./assets/typingCat.gif";

function App() {
  return (
    <div id="app">
      <Landing />
      <About />
      <SectionHeading content="Technical Skills" image={typingCat} /> <Skills />
      <SectionHeading content="Work Experience" />
      <Experience />
      <SectionHeading content="Projects" />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
