import { useState } from 'react';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
//import Characters from './Characters';
import SharedLayout from './pages/SharedLayout';
//import Character from './Character''

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="/Characters" element={<Characters />} />
          <Route path="/Characters/:characterId" element={<Character />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
