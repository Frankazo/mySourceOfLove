import React from 'react';
import './App.css';
import Home from './components/home.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/nav.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
