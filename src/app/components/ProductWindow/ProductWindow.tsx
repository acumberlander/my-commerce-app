/* eslint-disable react/no-unescaped-entities */
import { MouseEvent, useEffect, useMemo, useState } from 'react';
import { CircularProgress, ToggleButton } from "@mui/material"
import './ProductWindow.css';
import { Product } from '@/app/models/Product';
import ProductCard from '../ProductCard/ProductCard';
import axios from 'axios';
import { makeSlidersDraggable } from './helpers/helpers';
import { SearchContextProps } from '../SearchProvider';


interface DefaultFilterState {
  all: string,
  electronics: string,
  men: string,
  women: string,
  jewelery: string,
};

const defaultFilterState: DefaultFilterState = {
  all: 'active-btn',
  electronics: 'inactive-btn',
  men: 'inactive-btn',
  women: 'inactive-btn',
  jewelery: 'inactive-btn',
};

const ProductWindow = ({inputValue, setInputValue}: SearchContextProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
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
    makeSlidersDraggable();
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
          jewelery: 'inactive-btn',
        });
      case 'men':
        setFilterState({
          all: 'inactive-btn',
          electronics: 'inactive-btn',
          men: 'active-btn',
          women: 'inactive-btn',
          jewelery: 'inactive-btn',
        });
      case 'women':
        setFilterState({
          all: 'inactive-btn',
          electronics: 'inactive-btn',
          men: 'inactive-btn',
          women: 'active-btn',
          jewelery: 'inactive-btn',
        });
      case 'jewelery':
        setFilterState({
          all: 'inactive-btn',
          electronics: 'inactive-btn',
          men: 'inactive-btn',
          women: 'inactive-btn',
          jewelery: 'active-btn',
        });
    
      default:
        setFilterState({
          all: 'active-btn',
          electronics: 'inactive-btn',
          men: 'inactive-btn',
          women: 'inactive-btn',
          jewelery: 'inactive-btn',
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

  const filteredProducts: Product[] = useMemo(() => {
    return products.filter(product => {
        const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
        const matchesSearch = !inputValue || product.title.toLowerCase().includes(inputValue.toLowerCase());
        return matchesCategory && matchesSearch;
    });
}, [products, inputValue, categoryFilter]);

  const filterProducts = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setSelectedColor(e);
    setLoading(true);
    
    const btnClicked = e.target as HTMLElement;
    if (btnClicked.innerText.toLowerCase() === 'all') {
      setCategoryFilter('all');
      setLoading(false);
    } else {
      setCategoryFilter(btnClicked.innerText.toLowerCase());
      setLoading(false);
    }
  }

  const containerClass = loading ? 'loading-container' : 'products-container';
  return (
    <div className="product-window-container">
      <div className="filter-slider-window">
        <div className="btn-container">
          <div className="filter-container">
            <ToggleButton 
              value="All" 
              className={`${filterState.all} filter-btn`}
              onClick={filterProducts}
            >All</ToggleButton>
              
            <ToggleButton 
              value="Electronics" 
              className={`${filterState.electronics} filter-btn`}
              onClick={filterProducts}
            >Electronics</ToggleButton>
            
            <ToggleButton 
              value="Men's Clothing" 
              className={`${filterState.men} filter-btn`}
              onClick={filterProducts}
            >Men's Clothing</ToggleButton>
            
            <ToggleButton 
              value="Women's Clothing" 
              className={`${filterState.women} filter-btn`}
              onClick={filterProducts}
            >Women's Clothing</ToggleButton>
            <ToggleButton 
              value="Jewelery" 
              className={`${filterState.jewelery} filter-btn`}
              onClick={filterProducts}
            >Jewelery</ToggleButton>
          </div>
        </div>
      </div>
      <div className={containerClass}>
        {loading ? (<CircularProgress />) : (filteredProducts?.map((product) => (
          <ProductCard key={product.id} {...product} />
        )))}
      </div>
    </div>
  )
}

export default ProductWindow
