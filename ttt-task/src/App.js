import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Maininfo from './components/head';
import Subinfo from './components/footer';

function App() {
  return (
    <div>
      <Navbar />
      <Maininfo />
      <Subinfo /> 
    </div>
  );
}

export default App;
