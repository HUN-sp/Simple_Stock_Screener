// Import the stock data
import stockData from '../data/stockData';

// Define stockMetrics to map filter parameters to stock data keys
const stockMetrics = {
    marketCap: "Market Capitalization (B)",
    peRatio: "P/E Ratio",
    roe: "ROE (%)",
    debtToEquity: "Debt-to-Equity Ratio",
    dividendYield: "Dividend Yield (%)",
    revenueGrowth: "Revenue Growth (%)",
    epsGrowth: "EPS Growth (%)",
    currentRatio: "Current Ratio",
    grossMargin: "Gross Margin (%)"
};

// Define filterStocks function
export const filterStocks = (filters) => {
    return stockData.filter((stock) => {
        return filters.every((filter) => {
            const { parameter, operator, value } = filter;
            const stockMetricKey = stockMetrics[parameter];
            const stockValue = stock[stockMetricKey];

            // Debugging information
            console.log(`Filter Parameter: ${parameter}, Operator: ${operator}, Filter Value: ${value}, Stock Value: ${stockValue}`);

            if (stockValue === undefined) {
                console.warn(`Warning: Stock data does not contain metric for ${parameter}`);
                return false;
            }

            if (typeof stockValue !== typeof value) {
                console.warn(`Type mismatch for ${parameter}. Stock value: ${typeof stockValue}, Filter value: ${typeof value}`);
                return false;
            }

            // Apply filter based on the operator
            switch (operator) {
                case '>':
                    return stockValue > value;
                case '<':
                    return stockValue < value;
                case '=':
                    return stockValue === value;
                default:
                    console.warn(`Unsupported operator: ${operator}`);
                    return true;
            }
        });
    });
};
