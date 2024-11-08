
// src/components/Navbar/Navbar.js
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import stockData from '../../data/stockData';
import './Navbar.css';

const Navbar = () => {
    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (!searchText.trim()) {
            toast.error('Please enter a ticker to search');
            return;
        }

        const ticker = stockData.find(
            (stock) => stock.Ticker?.toUpperCase() === searchText.toUpperCase()
        );

        if (ticker) {
            // Show success toast when ticker is found
            toast.success(`Found ${ticker.Ticker}!`);

            navigate('/ticker-detail', {
                state: { ticker },
                replace: true
            });
            setSearchText(''); // Clear the search input
        } else {
            // Show error toast when ticker is not found
            toast.error(`No results found for "${searchText}"`);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        
        <nav className="navbar">
            <div className="navbar__logo">Moneyzzz</div>
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
                <input
                    type="text"
                    placeholder="Search for a company"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className="navbar__profile">
                <span className="profile__name">Ronaldo</span>
                <img
                    src="https://via.placeholder.com/32"
                    alt="Profile"
                    className="profile__image"
                />
            </div>
            <ToastContainer />
        </nav>
    );
};

export default Navbar;