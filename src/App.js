import React from 'react';
import NavBar from './components/Navbar';
import Video from './components/Video';
import Footer from './components/Footer';

import './App.css';


const App = () => {
  return (
    <div className="app">

      <NavBar />
      <Video />
      <Footer />
    
    </div>
  );
};

export default App;
