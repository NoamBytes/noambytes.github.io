import React from 'react';
import { NavBar } from './components/header';
import { About } from './components/about';
import { Jumbotron } from './components/jumbotron';
import { ContactSection } from './components/contact';
import { Projects } from './components/projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Jumbotron/>
      <About/>
      <Projects/>
      <ContactSection/>
    </div>
  );
}

export default App;
