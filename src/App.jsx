import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useState } from 'react';

import Home from './pages/Home';
import Characters from './pages/Characters';
import SharedLayout from './pages/SharedLayout';
import Character from './pages/Character';

import './App.css';

const App = () => {
  
  // const [bg, setBg] = useState();
  // "top no-repeat url('./assets/homepage/Background.png'), bottom right no-repeat url('./assets/homepage/Spiral.png'), bottom no repeat url('./assets/homepage/Star.png')"
  return (
    // <div style={{background: bg}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/Characters" element={<Characters />} />
            <Route path="/Characters/:characterId" element={<Character />} />
          </Route>
        </Routes>
      </BrowserRouter>
    // </div>
  );
}

export default App;
