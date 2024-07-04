import React from 'react'
import Hero from '../components/Hero/Hero';
import MidSearch from '../components/MidSearch/MidSearch';
import ProductWindow from '../components/ProductWindow/ProductWindow';
import VideoSection from '../components/VideoSection/VideoSection';
import MarketingSection from '../components/MarketingSection/MarketingSection';
import Subscription from '../components/Subscription/Subscription';
import Footer from '../components/Footer/Footer';
import { useSearchContext } from '../components/SearchProvider';

const HomePage = () => {
  const { inputValue, setInputValue }  = useSearchContext();
  return (
    <>
      <Hero />
      <MidSearch inputValue={inputValue} setInputValue={setInputValue} />
      <ProductWindow inputValue={inputValue} />
      <VideoSection />
      <MarketingSection />
      <Subscription />
      <Footer />
    </>
  )
}

export default HomePage