// Import the stock data
import stockData from '../data/stockData';

// src/utils/filterStocks.js

export const filterStocks = (query) => {
    return stockData.filter((stock) => {
        const { marketCap, peRatio, roe } = query;
        
        let isMatch = true;

        // Check if market capitalization meets criteria
        if (marketCap && stock["Market Capitalization (B)"] <= marketCap) {
            isMatch = false;
        }

        // Check if price-to-earnings ratio meets criteria
        if (peRatio && stock["P/E Ratio"] >= peRatio) {
            isMatch = false;
        }

        // Check if return on equity meets criteria
        if (roe && stock["ROE (%)"] <= roe) {
            isMatch = false;
        }

        return isMatch;
    });
};
