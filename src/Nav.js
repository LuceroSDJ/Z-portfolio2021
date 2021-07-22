import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';

function NavBar() {
    return (
        <header className="changed">
            <img src={logo} className="App-logo" alt="logo" />
            <a
                className="Nav-link"
                href="#about"
            >
                ABOUT
            </a>
            <a
                className="Nav-link"
                href="#projectsWrapper"
            >
                PROJECTS
            </a>
            <a
                className="Nav-link"
                href="#contact"
            >
                CONTACT
            </a>
            {/* <a
                className="Nav-link"
                href="https://reactjs.org"
            >
                BLOG
            </a> */}
        </header>
    )
    
}

export default NavBar;