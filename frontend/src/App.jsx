import './App.css'
import React from 'react';
import NavBar from './Components/nav bar/navigation'
import { BrowserRouter, Routes, Route, useRoutes, Router } from 'react-router-dom';

import Home from './pages/Home';
function App() {

  
  return (
    <BrowserRouter> 
    <div className="App">
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
    </div>
    </BrowserRouter> 
  )
}

export default App