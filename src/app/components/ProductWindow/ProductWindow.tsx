/* eslint-disable react/no-unescaped-entities */
import { MouseEvent, useEffect, useState } from 'react';
import { CircularProgress, ToggleButton } from "@mui/material"
import './ProductWindow.css';
import { Product } from '@/app/models/Product';
import ProductCard from '../ProductCard/ProductCard';
import axios from 'axios';


type DefaultFilterState = {
  all: string,
  electronics: string,
  men: string,
  women: string,
};

const defaultFilterState: DefaultFilterState = {
  all: 'active',
  electronics: 'inactive',
  men: 'inactive',
  women: 'inactive',
};

const ProductWindow = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [filterState, setFilterState] = useState<DefaultFilterState>(defaultFilterState);
  
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

    switch (btnClicked.innerText.toLowerCase()) {
      case 'electronics':
        setFilterState({
          all: 'inactive-btn',
          electronics: 'active-btn',
          men: 'inactive-btn',
          women: 'inactive-btn',
        });
      case 'men':
        setFilterState({
          all: 'inactive-btn',
          electronics: 'inactive-btn',
          men: 'active-btn',
          women: 'inactive-btn',
        });
      case 'women':
        setFilterState({
          all: 'inactive-btn',
          electronics: 'inactive-btn',
          men: 'inactive-btn',
          women: 'active-btn',
        });
    
      default:
        setFilterState({
          all: 'active-btn',
          electronics: 'inactive-btn',
          men: 'inactive-btn',
          women: 'inactive-btn',
        });
        break;
    }

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
  };

  const filterProducts = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    let filteredProducts: Product[] = [];
    setLoading(true);
    axios.get('https://fakestoreapi.com/products')
    .then((response) => {
        const btnClicked = e.target as HTMLElement;
        const productData = response.data;
      if (btnClicked.innerText.toLowerCase() === 'all') {
        setProducts(productData);
        setLoading(false);
      } else {
        filteredProducts = productData.filter((product: Product) => {
          return product.category === btnClicked.innerText.toLowerCase();
        });
        setProducts(filteredProducts);
        setLoading(false);
      }
    })
  }
const containerClass = loading ? 'loading-container' : 'products-container'
  return (
    <div className="product-window-container">
      <div className="filter-slider-window">
        <div className="btn-container">
          <div className='filter-container'>
            <ToggleButton 
              onChange={setSelectedColor} 
              value="All" 
              className="active-btn filter-btn"
              onClick={filterProducts}
            >All</ToggleButton>
              
            <ToggleButton 
              onChange={setSelectedColor} 
              value="Electronics" 
              className="inactive-btn filter-btn"
              onClick={filterProducts}
            >Electronics</ToggleButton>
            
            <ToggleButton 
              onChange={setSelectedColor} 
              value="Men's Clothing" 
              className="inactive-btn filter-btn"
              onClick={filterProducts}
            >Men's Clothing</ToggleButton>
            
            <ToggleButton 
              onChange={setSelectedColor} 
              value="Women's Clothing" 
              className="inactive-btn filter-btn"
              onClick={filterProducts}
            >Women's Clothing</ToggleButton>
            <ToggleButton 
              onChange={setSelectedColor} 
              value="Jewelery" 
              className="inactive-btn filter-btn"
              onClick={filterProducts}
            >Jewelery</ToggleButton>
          </div>
        </div>
      </div>
      <div className={containerClass}>
        {loading ? (<CircularProgress />) : (products?.map((product) => (
          <ProductCard key={product.id} {...product} />
        )))}
      </div>
    </div>
  )
}

export default ProductWindow
