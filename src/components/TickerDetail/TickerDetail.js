// src/components/TickerDetail/TickerDetail.js
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, PieChart } from 'lucide-react';
import './TickerDetail.css';

const TickerDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const ticker = location.state?.ticker;

    useEffect(() => {
        if (!ticker) {
            navigate('/', { replace: true });
        }
    }, [ticker, navigate]);

    if (!ticker) return null;

    return (
        <motion.div 
            className="ticker-detail-page"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="ticker-detail-container">
                <motion.div 
                    className="ticker-header"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h1>{ticker.Ticker}</h1>
                    <div className="ticker-badge">Active</div>
                </motion.div>

                <div className="ticker-grid">
                    <motion.div 
                        className="ticker-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="card-icon">
                            <DollarSign size={24} />
                        </div>
                        <div className="card-content">
                            <h3>Market Capitalization</h3>
                            <p className="value">{ticker["Market Capitalization (B)"]}B</p>
                            <p className="subtitle">USD</p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="ticker-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="card-icon">
                            <TrendingUp size={24} />
                        </div>
                        <div className="card-content">
                            <h3>P/E Ratio</h3>
                            <p className="value">{ticker["P/E Ratio"]}</p>
                            <p className="subtitle">Price to Earnings</p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="ticker-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="card-icon">
                            <PieChart size={24} />
                        </div>
                        <div className="card-content">
                            <h3>ROE</h3>
                            <p className="value">{ticker["ROE (%)"]}%</p>
                            <p className="subtitle">Return on Equity</p>
                        </div>
                    </motion.div>
                </div>

                <motion.button 
                    className="back-button"
                    onClick={() => navigate('/')}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Back to Search
                </motion.button>
            </div>
        </motion.div>
    );
};

export default TickerDetail;