import React, {useEffect, useState} from 'react';
import Logo from "../../utils/Logo";
import Button from '@material-ui/core/Button';
import CSSTransition from "react-transition-group/CSSTransition";
import "./Header.css";

function Header(props) {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };

    return (
        <header className="Header">
            <button onClick={toggleNav} className="Burger">
                ☰
            </button>
                <nav className={
                    (isSmallScreen && isNavVisible) ? "Nav" :
                    (isSmallScreen && !isNavVisible) ? "Nav-hide" : "Nav"}>
                    <a href="/">Home</a>
                    <a href="/">Articles</a>
                    <a href="/">About</a>
                    <button>Logout</button>
                </nav>
            <img src={""} className="Logo" alt="logo" />
        </header>
    );
}

export default Header;
