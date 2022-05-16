import React from 'react';
import { useSelector } from 'react-redux';

import { AnimatePresence, motion } from 'framer-motion'
import './App.css';
import { AuthModal } from './components/Auth/AuthModal';
import { Navbar } from './components/Navbar/Navbar';
import { Router } from './router/Router';
import { Animate } from './Animations/aMain';


function App() { 
  const loginModal = useSelector(s=>s.nav.loginModal)


  return (
    <div className="App">
      
        <Router Navbar={Navbar}/>
        
          <Animate precense={loginModal} exit={true} animation='opacity'>
            <AuthModal/>
          </Animate>
        
        
    </div>
  );
}

export default App;
