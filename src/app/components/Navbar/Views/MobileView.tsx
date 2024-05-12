'use client';

import hamburgerIcon from '../../../../icons/menu.png';
import './MobileView.css';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Image from 'next/image';
import { useUserContext } from '../../UserProvider';

const MobileView = () => {
  const [state, setState] = useState({ right: false });
  const { signOutUser } = useUserContext();
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
          <a onClick={signOutUser}>
            <ListItem disablePadding>
                <ListItemText primary="Sign Out" />
            </ListItem>
          </a>
        <Divider />
      </List>
    </Box>
  );

  return (
    <React.Fragment key={'right'}>
      <Image onClick={toggleDrawer('right', true)} id="hamburgerIcon" src={hamburgerIcon} alt="" />
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
