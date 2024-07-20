
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects/>
      <Education />
      <Skills />
    </div>
    
  );
}

export default App;
