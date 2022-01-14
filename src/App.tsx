import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./components/Card"
import Navbar from './components/menu/Navbar';
import {Outlet} from 'react-router-dom'
// import Card from "./components/card"

// experience.map(exp => {
//   exp.dates
// })

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
