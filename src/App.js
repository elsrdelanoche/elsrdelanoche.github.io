import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Experience />
      <Education />
      <Skills />
    </div>
  );
}

export default App;
