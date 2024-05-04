import { useState, MouseEvent } from 'react';
import { Button, ToggleButton, ToggleButtonGroup } from "@mui/material"
import './ProductWindow.css';
import ProductCard from "../ProductCard/ProductCard";
import { products } from "@/app/data/apiRequests";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
      light: '#fff',
    },
  },
});



const ProductWindow = () => {
  
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
        {
          products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))
        }
      </div>
    </div>
  )
}

export default ProductWindow