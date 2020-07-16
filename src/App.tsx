import React from 'react';
import { NavBar } from './components/header';
import { About } from './components/about';
import { Jumbotron } from './components/jumbotron';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Jumbotron/>
      <About/>
    </div>
  );
}

export default App;
