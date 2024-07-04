'use client';

/* eslint-disable react/no-unescaped-entities */
import { useEffect, useMemo, useState } from 'react';
import { CircularProgress, ToggleButton } from "@mui/material"
import './ProductWindow.css';
import ProductCard from '../ProductCard/ProductCard';
import { makeSlidersDraggable, setPaginationResponsiveness, setResponsiveness } from '../../utils/helpers';
import { fetchProducts } from '../../apiRequests';

const defaultFilterState = {
  all: 'active-btn',
  electronics: 'inactive-btn',
  men: 'inactive-btn',
  women: 'inactive-btn',
  jewelery: 'inactive-btn',
};

const ProductWindow = ({inputValue}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [filterState, setFilterState] = useState(defaultFilterState);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  useEffect(() => {
    fetchProducts(setProducts, setLoading);
    setPaginationResponsiveness(setItemsPerPage);
    makeSlidersDraggable();

    window.addEventListener('resize', () => setPaginationResponsiveness(setItemsPerPage));
  }, []);

  const setSelectedColor = (e) => {
    const btnClicked = e.target;

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

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
        const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
        const matchesSearch = !inputValue || product.title.toLowerCase().includes(inputValue.toLowerCase());
        return matchesCategory && matchesSearch;
    });
  }, [products, inputValue, categoryFilter]);
  
  // Calculate the current products to display
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Total number of pages
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const filterProductsByCategory = (e) => {
    e.preventDefault();
    setSelectedColor(e);
    setLoading(true);
    
    const btnClicked = e.target;
    if (btnClicked.innerText.toLowerCase() === 'all') {
      setCategoryFilter('all');
      setLoading(false);
    } else {
      setCategoryFilter(btnClicked.innerText.toLowerCase());
      setLoading(false);
    }

    for (let i = 1; i <= Math.ceil(currentProducts.length / itemsPerPage); i++) {
      pageNumbers.push(i);
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
              onClick={filterProductsByCategory}
            >All</ToggleButton>
              
            <ToggleButton 
              value="Electronics" 
              className={`${filterState.electronics} filter-btn`}
              onClick={filterProductsByCategory}
            >Electronics</ToggleButton>
            
            <ToggleButton 
              value="Men's Clothing" 
              className={`${filterState.men} filter-btn`}
              onClick={filterProductsByCategory}
            >Men's Clothing</ToggleButton>
            
            <ToggleButton 
              value="Women's Clothing" 
              className={`${filterState.women} filter-btn`}
              onClick={filterProductsByCategory}
            >Women's Clothing</ToggleButton>
            
            <ToggleButton 
              value="Jewelery" 
              className={`${filterState.jewelery} filter-btn`}
              onClick={filterProductsByCategory}
            >Jewelery</ToggleButton>
          </div>
        </div>
      </div>
      <div className={containerClass}>
        {loading ? (<CircularProgress />) : (currentProducts?.map((product) => (
          <ProductCard key={product.id} {...product} />
        )))}
      </div>
      <nav>
        <ul className='pagination'>
          {pageNumbers.map(number => (
            <li key={number} className='page-item'>
              <a onClick={() => paginate(number)} className='page-link'>
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default ProductWindow
