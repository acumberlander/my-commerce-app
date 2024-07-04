'use client';

import { Fragment, useEffect, useState } from 'react';
import logo from '../../../icons/squiggle.png';
import cartImg from '../../../icons/online-shopping.png';
import avatar from '../../../icons/profile-pic.png';
import './Navbar.css';
import Image from 'next/image';
import MobileView from './Views/MobileView';
import { Box, Drawer, List, Divider, ListItem, ListItemText } from '@mui/material';
import { setResponsiveness, navigate } from '../../utils/helpers';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = ({cart}) => {
  const [mobileView, setMobileView] = useState(false);
  const [state, setState] = useState({ right: false });
  
  const toggleDrawer = (anchor, open) =>
  (event) => {
    if (
      event.type === 'keydown' &&
      ((event).key === 'Tab' ||
        (event).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
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
          <a className="sign-out-link">
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
        <RouterLink to="/cart">
          <div className='cart-container'>
            <Image id="cart" src={cartImg} alt="cart" />
          </div>
        </RouterLink>
        
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
