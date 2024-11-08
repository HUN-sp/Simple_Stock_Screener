// src/App.js
import React from 'react';
import QueryScreen from './components/QueryScreen/QueryScreen';
import Results from './components/Results/Results';
import TickerDetail from './components/TickerDetail/TickerDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<QueryScreen />} />
                    <Route path="/results" element={<Results />} />
                    <Route path="/ticker-detail" element={<TickerDetail />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;