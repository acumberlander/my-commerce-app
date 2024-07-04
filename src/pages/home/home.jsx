import React from 'react'
import Hero from '../../app/components/Hero/Hero';
import MidSearch from '../../app/components/MidSearch/MidSearch';
import ProductWindow from '../../app/components/ProductWindow/ProductWindow';
import VideoSection from '../../app/components/VideoSection/VideoSection';
import MarketingSection from '../../app/components/MarketingSection/MarketingSection';
import Subscription from '../../app/components/Subscription/Subscription';
import Footer from '../../app/components/Footer/Footer';
import { useSearchContext } from '../../app/components/SearchProvider';

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