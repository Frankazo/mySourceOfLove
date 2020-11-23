import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';

import Home from './components/home.js';
import Navigation from './components/nav.js';
import Footer from './components/footer.js';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
