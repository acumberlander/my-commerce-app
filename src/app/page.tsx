'use client'
import { useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar"
import './page.css';
import ProductWindow from "./components/ProductWindow/ProductWindow";
import MidSearch from "./components/MidSearch/MidSearch";
import VideoSection from "./components/VideoSection/VideoSection";

const app = () => {

  useEffect(() => {
    const setResponsiveness = () => {
      console.log(window.innerWidth);
    };

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());
  }, []);


  return (
    <div className='app-container'>
      <Navbar />
      <Hero />
      <MidSearch />
      <ProductWindow />
      <VideoSection />
    </div>
  )
}

export default app