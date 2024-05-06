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
import { Product } from "./models/Product";
import axios from "axios";


const app = () => {
  // const [products, setProducts] = useState<Product[]>([]);
  // const [loading, setLoading] = useState<Boolean>(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('https://fakestoreapi.com/products');
  //       setProducts(response.data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching product data: ', error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

    
  return (
    <div className='app-container'>
      <Navbar />
      <Hero />
      <MidSearch />
      <ProductWindow />
      {/* <ProductWindow products={products} loading={loading} /> */}
      <VideoSection />
      <MarketingSection />
      {/* <MarketingSection products={products} loading={loading} /> */}
      <Subscription />
      <Footer />
    </div>
  )
}

export default app