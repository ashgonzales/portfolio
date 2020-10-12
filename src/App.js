import React from 'react';
import Hero from '../src/components/Hero/Hero';
import About from '../src/components/About/About';
import Footer from '../src/components/shared/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Footer />
    </div>
  );
}

export default App;
