
import React from 'react';
import './Results.css';

const Results = ({ stocks }) => {
    return (
        <div className="results-container">
            <h3>Query Results</h3>
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
