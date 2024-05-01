'use client';

import hamburgerIcon from '../../../../icons/icons8-hamburger-menu-144(@3×).png';
import './MobileView.css';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const MobileView = () => {
  const [state, setState] = useState({ right: false });

  const goToSection = (text: string): string | undefined => {
    switch (text) {
      case 'Home':
        return '#home';
      case 'About Us':
        return '#about-us';
      case 'Contact Us':
        return '#contact-us';
      case 'Donate':
        return '#donate';
      case 'Milestones':
        return '#milestones';

      default:
        return '';
    }
  };

  const toggleDrawer =
    (anchor: 'right', open: boolean) =>
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
        <ListItem alignItems="center" disablePadding>
          <a href="#home">
            <ListItemText primary="Home" />
          </a>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <a href="#about-us">
            <ListItemText primary="About Us" />
          </a>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <a href="#milestones">
            <ListItemText primary="Milestones" />
          </a>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <a href="#contact-us">
            <ListItemText primary="Contact Us" />
          </a>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <a href="#donate">
            <ListItemText primary="Donate" />
          </a>
        </ListItem>
        <Divider />
      </List>
    </Box>
  );

  return (
    <React.Fragment key={'right'}>
      <Button id="menu-button" onClick={toggleDrawer('right', true)}>
        <img id="hamburgerIcon" src={hamburgerIcon} alt="" />
      </Button>
      <Drawer
        anchor={'right'}
        open={state['right']}
        onClose={toggleDrawer('right', false)}
        id="drawer"
      >
        {list('right')}
      </Drawer>
    </React.Fragment>
  );
};

export default MobileView;
