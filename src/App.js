// src/App.js
import React from 'react';
import QueryScreen from './components/QueryScreen/QueryScreen';
import Navbar from './components/Navbar/Navbar';

function App() {
    return (
        <div className="App">
            <Navbar />
            <QueryScreen />
        </div>
    );
}

export default App;
