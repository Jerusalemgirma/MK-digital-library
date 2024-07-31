import './App.css'
import React from 'react';
import NavBar from './Components/nav bar/navigation'
import { BrowserRouter, Routes, Route, useRoutes, Router } from 'react-router-dom';

function App() {

  
  return (
    <BrowserRouter> 
    <div className="App">
            <NavBar />
            
    </div>
    </BrowserRouter> 
  )
}

export default App