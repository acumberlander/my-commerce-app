'use client';

import { useEffect, useState } from 'react';
import logo from '../../../icons/squiggle.png';
import cart from '../../../icons/online-shopping.png';
import search from '../../../icons/search-interface-symbol.png';
import avatar from '../../../icons/profile-pic.png';
import './Navbar.css';
import Image from 'next/image';
import MobileView from './Views/MobileView';

const Navbar = () => {
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 768
        ? setMobileView(true)
        : setMobileView(false);
    };

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  const view = mobileView ? 'hamburger' : 'navbar-container';

  return (
    <div className="navbar-container">
        <a className="left-nav-section" href='/'>
          <Image id="logo" src={logo} alt="Shopy" />
          <span id="logo-text">ShopyShop</span>
        </a>
        {!mobileView && (
          <div className='mid-nav-section'>
            <div>
              <a href="/">Home</a>
            </div>
            <div>
              <a href="#shop">Shop</a>
            </div>
            <div>
              <a href="#blog">Blog</a>
            </div>
          </div>
        )
        }
      <div className='right-nav-section'>
        <a href="/cart">
            <div className='cart-container'>
              <Image id="cart" src={cart} alt="cart" />
            </div>
        </a>
        {mobileView ? (
          <>
            <div className='profile-container'>
              <MobileView />
            </div>
          </>
        ): (
          <>
            <div className='profile-container'>
              <Image id="profile" src={avatar} alt="profile" />
            </div>
          </>
        )
        }
          </div>
    </div>
  );
};

export default Navbar;
