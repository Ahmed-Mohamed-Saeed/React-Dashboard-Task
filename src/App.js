import React from 'react';
import "./App.css";
import Nav from './components/Nav/Nav';
import Aside from "./components/Aside/Aside";
import Booking from './components/Booking/Booking';
import Statistics from './components/Statistics/Statistics';
import { Routes, Route, HashRouter } from 'react-router-dom';

const App = () => {
  return (
    <div className="app flex">
      <HashRouter>
        <Aside />
        <main className="body">
          <Nav />
          <Routes>
            <Route path="/" element={<Booking />}/>
            <Route path="dashboard" element={<Statistics />}/>
          </Routes>
        </main>
      </HashRouter>
    </div>
  )
}

export default App;