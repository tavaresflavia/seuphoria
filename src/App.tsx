import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path = "/" element={<Home/>} />
          <Route path = "/shop" element={<Shop/>} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
