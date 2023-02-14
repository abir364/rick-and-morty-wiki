import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useState } from 'react';

import Home from './pages/Home';
import Characters from './pages/Characters';
// import SharedLayout from './pages/SharedLayout';
import Character from './pages/Character';

import './App.css';



const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route index element={} /> */}

        </Route>
        <Route path="/Characters" element={<Characters />} />
        <Route path="/Characters/:ca" element={<Character />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
