'use client';

import { Fragment, useEffect, useState } from 'react';
import logo from '../../../icons/squiggle.png';
import cartImg from '../../../icons/online-shopping.png';
import avatar from '../../../icons/profile-pic.png';
import './Navbar.css';
import Image from 'next/image';
import MobileView from './Views/MobileView';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useUserContext } from '../UserProvider';
import { setResponsiveness } from '@/app/utils/helpers';
import { Product } from '@/app/models/Product';
import { useCartContext } from '../CartProvider';

const Navbar = () => {
  const [mobileView, setMobileView] = useState(false);
  const [state, setState] = useState({ right: false });
  const { signOutUser } = useUserContext();
  const { cart, setCart } = useCartContext();
  
  const toggleDrawer = (anchor: 'right', open: boolean) =>
  (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: 'right') => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      id="box"
    >
      <List>
          <a href="/">
            <ListItem alignItems="center" disablePadding>
                <ListItemText primary="Home" />
            </ListItem>
          </a>
        <Divider />
          <a href="#shop">
            <ListItem disablePadding>
                <ListItemText primary="Shop" />
            </ListItem>
          </a>
        <Divider />
          <a href="#blog">
            <ListItem disablePadding>
                <ListItemText primary="Blog" />
            </ListItem>
          </a>
        <Divider />
          <a className="sign-out-link" onClick={signOutUser}>
            <ListItem disablePadding>
                <ListItemText primary="Sign Out" />
            </ListItem>
          </a>
        <Divider />
      </List>
    </Box>
  );
  useEffect(() => {
    setResponsiveness(768, setMobileView);
    window.addEventListener('resize', () => setResponsiveness(768, setMobileView));
  }, []);

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
              <Image id="cart" src={cartImg} alt="cart" />
            </div>
        </a>
        {mobileView ? (
          <Fragment key={'right'}>
            <div className='profile-container'>
              <MobileView />
            </div>
          </Fragment>
        ): (
          <Fragment key={'right'}>
            <div className='profile-container'>
              <Image onClick={toggleDrawer('right', true)} id="profile" src={avatar} alt="profile" />
              <Drawer
                anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
                id="drawer"
              >
                {list('right')}
              </Drawer>
            </div>
          </Fragment>
        )
        }
          </div>
    </div>
  );
};

export default Navbar;
