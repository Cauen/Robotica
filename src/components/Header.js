import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import '../styles/components/Header.scss'

import * as GeneralActions from '../store/general';

const Header = () => {
    const dispatch = useDispatch();
    const mobileOpen = useSelector(state => state.general.mobileOpen);

    const handleDrawerToggle = () => {
        console.log('Setting mobile');
        dispatch(GeneralActions.setMobileOpen(!mobileOpen));
    };
    return (<div className="header-component">
        <AppBar position="fixed" className={'app-bar'}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={'menu-button'}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    Robótica Computacional
  </Typography>
            </Toolbar>
        </AppBar>
    </div>)
};

export default Header;
