/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import Navbar from "./components/Navbar/Navbar";
import CartPage from "./cart/page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './page.css';
import HomePage from "./home/page";

const app = () => {
  
  return (
    <div className='app-container'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default app