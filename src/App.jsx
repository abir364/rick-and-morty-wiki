import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// import { useState } from 'react';

import Home from './pages/Home';
import Characters from './pages/Characters';
import SharedLayout from './pages/SharedLayout';
import Character from './pages/Character';

import './App.css';

const App = () => {
  // const lt = useLocation();
  // console.log(lt.pathname);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/Characters" element={<Characters />} />
            <Route path="/Characters/:ca" element={<Character />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
