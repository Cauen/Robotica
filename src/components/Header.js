import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';

import * as GeneralActions from '../store/general';

import '../styles/components/Header.scss';

const Header = () => {
  const dispatch = useDispatch();
  const mobileOpen = useSelector((state) => state.general.mobileOpen);

  const handleDrawerToggle = () => {
    dispatch(GeneralActions.setMobileOpen(!mobileOpen));
  };
  return (
    <div className="header-component">
      <AppBar position="fixed" className="app-bar">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className="menu-button"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
                        Robótica Computacional
          </Typography>
          <div className="section-desktop">
            <IconButton
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls="12"
              aria-haspopup="true"
              onClick={() => {}}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
