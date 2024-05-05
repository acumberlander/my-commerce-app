import { MouseEvent, Suspense, useEffect, useState } from 'react';
import { ToggleButton } from "@mui/material"
import './ProductWindow.css';
import { Product } from '@/app/models/Product';
import ProductCard from '../ProductCard/ProductCard';
import axios from 'axios';

const ProductWindow = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        if (response.data.length) {
          const productDataCopy = [...response.data];
          productDataCopy.map((item: Product) => {
            if (item.title.length > 50) {
              item.title = item.title.slice(0, 47) + '...';
            }
          });
          setProducts(productDataCopy);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching product data: ', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const setSelectedColor = (e: MouseEvent<HTMLElement>) => {
    const btnClicked = e.target as HTMLElement; 
    if (btnClicked.className === 'active-btn') {
      return;
    } else {
      const activeButtons = document.querySelectorAll('.active-btn');
      activeButtons.forEach((btn) => {
        btn.classList.remove('active-btn');
        btn.classList.add('inactive-btn');
      })
      btnClicked.classList.remove('inactive-btn');
      btnClicked.classList.add('active-btn');
    }
  }

  return (
    <div className="product-window-container">
      <div className="filter-slider-window">
        <div className="btn-container">
          <div className='filter-container'>
            <ToggleButton 
              onChange={setSelectedColor} 
              value="All" 
              className="active-btn"
            >All</ToggleButton>
              
            <ToggleButton 
              onChange={setSelectedColor} 
              value="Electronics" 
              className="inactive-btn"
            >Electronics</ToggleButton>
            
            <ToggleButton 
              onChange={setSelectedColor} 
              value="Men" 
              className="inactive-btn"
            >Men</ToggleButton>
            
            <ToggleButton 
              onChange={setSelectedColor} 
              value="Women" 
              className="inactive-btn"
            >Women</ToggleButton>
          </div>
        </div>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}

export default ProductWindow
