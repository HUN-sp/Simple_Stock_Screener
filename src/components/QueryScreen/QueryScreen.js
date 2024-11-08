// // src/components/QueryScreen.js
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import { filterStocks } from '../../utils/filterStocks';
// import 'react-toastify/dist/ReactToastify.css';
// import './QueryScreen.css';

// const QueryScreen = () => {
//     const [queryText, setQueryText] = useState('');
//     const navigate = useNavigate();

//     // Clear query text when component mounts or when navigating back to this page
//     useEffect(() => {
//         setQueryText('');
//     }, []);

//     // Validate if the query contains valid patterns
//     const validateQuery = (query) => {
//         return (
//             /Market capitalization [><] \d+/i.test(query) ||
//             /Price to earning [><] \d+/i.test(query) ||
//             /Return on capital employed [><] \d+/i.test(query)
//         );
//     };

//     const parseQuery = (query) => {
//         const criteria = {};
//         if (query.includes('Market capitalization >')) {
//             const value = query.match(/Market capitalization > (\d+)/);
//             criteria.marketCap = value ? parseFloat(value[1]) : undefined;
//         }
//         if (query.includes('Price to earning <')) {
//             const value = query.match(/Price to earning < (\d+)/);
//             criteria.peRatio = value ? parseFloat(value[1]) : undefined;
//         }
//         if (query.includes('Return on capital employed >')) {
//             const value = query.match(/Return on capital employed > (\d+)/);
//             criteria.roe = value ? parseFloat(value[1]) : undefined;
//         }
//         return criteria;
//     };

//     const handleRunQuery = () => {
//         if (!queryText.trim() || !validateQuery(queryText)) {
//             toast.error('Please enter a valid query with correct format.');
//             return;
//         }

//         const queryObject = parseQuery(queryText);
//         const results = filterStocks(queryObject);
        
//         // Use replace: true to prevent going back to stale results
//         navigate('/results', { 
//             state: { 
//                 stocks: results,
//                 timestamp: Date.now() // Add timestamp to track fresh results
//             },
//             replace: true
//         });
//     };

//     return (
//         <div className="query-screen">
//             <ToastContainer />
//             <div className="query-container">
//                 <h2>Create a Search Query</h2>
//                 <textarea
//                     placeholder="Enter your query here..."
//                     className="query-input"
//                     value={queryText}
//                     onChange={(e) => setQueryText(e.target.value)}
//                 ></textarea>
//                 <button className="run-query-button" onClick={handleRunQuery}>
//                     RUN THIS QUERY
//                 </button>
//             </div>
            
//             <div className="custom-query-example">
//                 <h3>Custom Query Example</h3>
//                 <p>Market capitalization &lt; 500</p>
//                 <p>Price to earning &lt; 15</p>
//                 <p>Return on capital employed &gt; 22%</p>
//             </div>
//         </div>
//     );
// };

// export default QueryScreen;


// src/components/QueryScreen.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { filterStocks } from '../../utils/filterStocks';
import 'react-toastify/dist/ReactToastify.css';
import './QueryScreen.css';

const QueryScreen = () => {
    const [queryText, setQueryText] = useState('');
    const navigate = useNavigate();

    // Clear query text when component mounts or when navigating back to this page
    useEffect(() => {
        setQueryText('');
    }, []);

    // Validate if the query contains valid patterns
    const validateQuery = (query) => {
        return (
            /Market capitalization [><] \d+/i.test(query) ||
            /Price to earning [><] \d+/i.test(query) ||
            /Return on capital employed [><] \d+/i.test(query)
        );
    };

    const parseQuery = (query) => {
        const filters = [];
        
        if (query.includes('Market capitalization >')) {
            const value = query.match(/Market capitalization > (\d+)/);
            if (value) filters.push({ parameter: 'marketCap', operator: '>', value: parseFloat(value[1]) });
        }
        if (query.includes('Market capitalization <')) {
            const value = query.match(/Market capitalization < (\d+)/);
            if (value) filters.push({ parameter: 'marketCap', operator: '<', value: parseFloat(value[1]) });
        }
        if (query.includes('Price to earning >')) {
            const value = query.match(/Price to earning > (\d+)/);
            if (value) filters.push({ parameter: 'peRatio', operator: '>', value: parseFloat(value[1]) });
        }
        if (query.includes('Price to earning <')) {
            const value = query.match(/Price to earning < (\d+)/);
            if (value) filters.push({ parameter: 'peRatio', operator: '<', value: parseFloat(value[1]) });
        }
        if (query.includes('Return on capital employed >')) {
            const value = query.match(/Return on capital employed > (\d+)/);
            if (value) filters.push({ parameter: 'roe', operator: '>', value: parseFloat(value[1]) });
        }
        if (query.includes('Return on capital employed <')) {
            const value = query.match(/Return on capital employed < (\d+)/);
            if (value) filters.push({ parameter: 'roe', operator: '<', value: parseFloat(value[1]) });
        }
        return filters;
    };

    const handleRunQuery = () => {
        if (!queryText.trim() || !validateQuery(queryText)) {
            toast.error('Please enter a valid query with correct format.');
            return;
        }

        const queryFilters = parseQuery(queryText);
        const results = filterStocks(queryFilters);
        
        // Use replace: true to prevent going back to stale results
        navigate('/results', { 
            state: { 
                stocks: results,
                timestamp: Date.now() // Add timestamp to track fresh results
            },
            replace: true
        });
    };

    return (
        <div className="query-screen">
            <ToastContainer />
            <div className="query-container">
                <h2>Create a Search Query</h2>
                <textarea
                    placeholder="Enter your query here..."
                    className="query-input"
                    value={queryText}
                    onChange={(e) => setQueryText(e.target.value)}
                ></textarea>
                <button className="run-query-button" onClick={handleRunQuery}>
                    RUN THIS QUERY
                </button>
            </div>
            
            <div className="custom-query-example">
                <h3>Custom Query Example</h3>
                <p>Market capitalization &lt; 500</p>
                <p>Price to earning &lt; 15</p>
                <p>Return on capital employed &gt; 22%</p>
            </div>
        </div>
    );
};

export default QueryScreen;

