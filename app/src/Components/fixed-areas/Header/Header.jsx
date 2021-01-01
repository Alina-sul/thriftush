import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Logo from '../../utils/Logo';
// import {NavLink} from 'react-router-dom'
import './Header.sass';
import MenuItems from './Menu/MenuItems/MenuItems';

function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  // const [isSmallScreen, setIsSmallScreen] = useState(false);
  // useEffect(() => {
  //     const mediaQuery = window.matchMedia("(max-width: 700px)");
  //     mediaQuery.addListener(handleMediaQueryChange);
  //     handleMediaQueryChange(mediaQuery);
  //
  //     return () => {
  //         mediaQuery.removeListener(handleMediaQueryChange);
  //     };
  // }, []);
  //
  // const handleMediaQueryChange = mediaQuery => {
  //     if (mediaQuery.matches) {
  //         setIsSmallScreen(true);
  //     } else {
  //         setIsSmallScreen(false);
  //     }
  // };

  // const toggleNav = () => {
  // setNavVisibility(!isNavVisible);
  // };

  return (
    <AppBar position="sticky" className="header">
      <Logo />
      <MenuItems />
    </AppBar>
  );
}

export default Header;
