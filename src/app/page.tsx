/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { useEffect, useState } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar"
import './page.css';
import ProductWindow from "./components/ProductWindow/ProductWindow";
import MidSearch from "./components/MidSearch/MidSearch";
import VideoSection from "./components/VideoSection/VideoSection";
import MarketingSection from "./components/MarketingSection/MarketingSection";
import Subscription from "./components/Subscription/Subscription";
import Footer from "./components/Footer/Footer";
import { useUserContext } from "./components/UserProvider";
import { useSearchContext } from "./components/SearchProvider";
import AuthPage from "./auth/page";


const app = () => {
  const { loggedIn }  = useUserContext();
  const { inputValue, setInputValue }  = useSearchContext();
  
  return (
    <div className='app-container'>
        {loggedIn ? 
          ( <>
              <Navbar />
              <Hero />
              <MidSearch inputValue={inputValue} setInputValue={setInputValue} />
              <ProductWindow inputValue={inputValue} setInputValue={setInputValue} />
              <VideoSection />
              <MarketingSection />
              <Subscription />
              <Footer />
            </>
          ): (
          <AuthPage />
        )
        }
    </div>
  )
}

export default app