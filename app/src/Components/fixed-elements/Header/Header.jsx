import React, {useEffect, useState} from 'react';
import Logo from "../../utils/Logo";
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import "./Header.sass";

function Header(props) {
    const [isNavVisible, setNavVisibility] = useState(false);
    //const [isSmallScreen, setIsSmallScreen] = useState(false);
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

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };

    return (
        <AppBar position="sticky" className="header">
test
        </AppBar>

    );
}

export default Header;
