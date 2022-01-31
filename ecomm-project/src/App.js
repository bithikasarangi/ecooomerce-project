import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/Shop.component';



function App() {
  return (
    <div className="homepage">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
