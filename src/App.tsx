import React from 'react';
import './App.scss';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Header />   
      <Hero />   
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
