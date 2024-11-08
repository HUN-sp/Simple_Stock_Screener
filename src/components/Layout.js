// src/components/Layout.js
import React from 'react';
import Navbar from './Navbar/Navbar';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
        </div>
    );
};

export default Layout;