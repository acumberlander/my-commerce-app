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
import { AppWrapper, useAppContext } from "./components/UserProvider";
import AuthPage from "./auth/page";


const app = () => {
  const loggedIn  = useAppContext();

  return (
    <div className='app-container'>
      <AppWrapper>
        {loggedIn ? 
          ( <>
              <Navbar />
              <Hero />
              <MidSearch />
              <ProductWindow />
              <VideoSection />
              <MarketingSection />
              <Subscription />
            </>
          ): (
          <AuthPage />
        )
        }
      </AppWrapper>
      <Footer />
    </div>
  )
}

export default app