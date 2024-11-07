// src/components/Navbar/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                Moneyzzz
            </div>
            <ul className="navbar__links">
                <li><a href="#feed">Feed</a></li>
                <li><a href="#screens">Screens</a></li>
                <li className="navbar__dropdown">
                    <a href="#tools" className="dropdown__toggle">Tools &#9662;</a>
                    <ul className="dropdown__menu">
                        <li><a href="#tool1">Tool 1</a></li>
                        <li><a href="#tool2">Tool 2</a></li>
                        <li><a href="#tool3">Tool 3</a></li>
                    </ul>
                </li>
            </ul>
            <div className="navbar__search">
                <input type="text" placeholder="Search for a company" />
            </div>
            <div className="navbar__profile">
                <span className="profile__name">Ronaldo</span>
                <img
                    src="https://via.placeholder.com/32"
                    alt="Profile"
                    className="profile__image"
                />
            </div>
        </nav>
    );
};

export default Navbar;
