import React from 'react';


import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Router } from './router/Router';


function App() {


  return (
    <div className="App">
      
        <Router Navbar={Navbar}/>
    </div>
  );
}

export default App;
