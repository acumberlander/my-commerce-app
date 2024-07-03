'use client';

import { useEffect, useState } from 'react';
import Image from "next/image";
import searchIcon from '../../../icons/search-interface-symbol.png';
import './MidSearch.css';
import { Button, Input } from "@mui/material";
import { SearchContextProps } from '../SearchProvider';
import { setResponsiveness } from '../../utils/helpers';

const MidSearch = ({inputValue, setInputValue}) => {
  const [mobileView, setMobileView] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  }

  useEffect(() => {
    setResponsiveness(901, setMobileView);
    window.addEventListener('resize', () => setResponsiveness(901, setMobileView));
  }, []);

  return (
    <div className="extra-search-div">
      {
        mobileView ? (
          <div className="search-container-only">
            <div className="search-container-2">
              <Image className="search-icon" src={searchIcon} alt="" />
              <input placeholder="Search ShopyShop" value={inputValue} onChange={handleSearch} />
              <Button className="black-btn">Search</Button>
            </div>
          </div>
        ): (
        <div className="header-and-search-container">
          <h1>Give All You Need</h1>
          <div className="search-container-2">
            <Image className="search-icon" src={searchIcon} alt="" />
            <input placeholder="Search ShopyShop" value={inputValue} onChange={handleSearch} />
            <Button className="black-btn">Search</Button>
          </div>
        </div>
        )
      }
      
    </div>
  )
}

export default MidSearch