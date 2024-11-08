import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Results.css';

const Results = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        const data = location.state?.stocks;
        const timestamp = location.state?.timestamp;
        
        // Check if we have valid data and it's from a recent query
        const isValidData = data && 
                           data.length >= 0 && 
                           timestamp && 
                           (Date.now() - timestamp) < 1000; // Results must be from last second

        if (isValidData) {
            setStocks(data);
        } else {
            // Redirect to QueryScreen if there's no valid data
            navigate('/', { replace: true });
        }
    }, [location, navigate]);

    return (
        <div className="results-screen">
            <h2>Query Results</h2>
            {stocks.length === 0 ? (
                <p>No results found.</p>
            ) : (
                <table className="results-table">
                    <thead>
                        <tr>
                            <th>Ticker</th>
                            <th>Market Cap (B)</th>
                            <th>P/E Ratio</th>
                            <th>ROE (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stocks.map((stock, index) => (
                            <tr key={index}>
                                <td>{stock.Ticker}</td>
                                <td>{stock["Market Capitalization (B)"]}</td>
                                <td>{stock["P/E Ratio"]}</td>
                                <td>{stock["ROE (%)"]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Results;