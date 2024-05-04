'use client'
import { useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar"
import './page.css';
import ProductWindow from "./components/ProductWindow/ProductWindow";
import MidSearch from "./components/MidSearch/MidSearch";
import VideoSection from "./components/VideoSection/VideoSection";
import MarketingSection from "./components/MarketingSection/MarketingSection";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Subscription from "./components/Subscription/Subscription";
import Footer from "./components/Footer/Footer";


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
      {/* <MarketingSection />
      <Subscription />
      <Footer /> */}
    </div>
  )
}

export default app