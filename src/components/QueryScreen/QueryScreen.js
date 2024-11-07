// // // src/components/QueryScreen.js
// // import React from 'react';
// // import Navbar from '../Navbar/Navbar';
// // import { filterStocks } from '../../utils/filterStocks';
// // import Results from '../Results/Results';
// // import './QueryScreen.css';

    
    

    
// // const QueryScreen = () => {


// //     return (
// //         <div className="query-screen">
// //             <Navbar />
// //             <div className="query-container">
// //                 <h2>Create a Search Query</h2>
// //                 <div className="query-form">
// //                     <textarea placeholder="Enter your query here..." className="query-input"></textarea>
// //                     <div className="query-options">
// //                         <label>
// //                             <input type="checkbox" /> Only companies with Sep 2024 results
// //                         </label>
// //                     </div>
// //                     <button className="run-query-button">RUN THIS QUERY</button>
// //                 </div>
// //                 <div className="custom-query-example">
// //                     <h3>Custom query example</h3>
// //                     <p>Market capitalization &gt; 500 AND</p>
// //                     <p>Price to earning &lt; 15 AND</p>
// //                     <p>Return on capital employed &gt; 22%</p>
                    
// //                 </div>
// //                 <button className="show-all-ratios-button">SHOW ALL RATIOS</button>
// //                 <a href="#" className="go-back-link">&larr; Go Back</a>
// //             </div>
// //         </div>
// //     );
// // };

// // export default QueryScreen;


// // src/components/QueryScreen.js
// import React, { useState } from 'react';
// import Navbar from '../Navbar/Navbar';
// import { filterStocks } from '../../utils/filterStocks';
// import Results from '../Results/Results';
// import './QueryScreen.css';

// const QueryScreen = () => {
//     const [queryText, setQueryText] = useState('');
//     const [filteredStocks, setFilteredStocks] = useState([]);

//     // Parse the query from the textarea into a structured query object
//     const parseQuery = (query) => {
//         const criteria = {};
        
//         // Sample parsing for simple AND conditions, you may need a more robust parser for complex queries
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

//     // Handle the "RUN THIS QUERY" button click
//     const handleRunQuery = () => {
//         const queryObject = parseQuery(queryText);
//         const results = filterStocks(queryObject);
//         setFilteredStocks(results);
//     };

//     return (
//         <div className="query-screen">
//             <Navbar />
//             <div className="query-container">
//                 <h2>Create a Search Query</h2>
//                 <div className="query-form">
//                     <textarea
//                         placeholder="Enter your query here..."
//                         className="query-input"
//                         value={queryText}
//                         onChange={(e) => setQueryText(e.target.value)}
//                     ></textarea>
//                     <div className="query-options">
//                         <label>
//                             <input type="checkbox" /> Only companies with Sep 2024 results
//                         </label>
//                     </div>
//                     <button className="run-query-button" onClick={handleRunQuery}>RUN THIS QUERY</button>
//                 </div>
//                 <div className="custom-query-example">
//                     <h3>Custom query example</h3>
//                     <p>Market capitalization &gt; 500 AND</p>
//                     <p>Price to earning &lt; 15 AND</p>
//                     <p>Return on capital employed &gt; 22%</p>
//                 </div>
//                 <button className="show-all-ratios-button">SHOW ALL RATIOS</button>
//                 <a href="#" className="go-back-link">&larr; Go Back</a>
//             </div>
//             <Results stocks={filteredStocks} />
//         </div>
//     );
// };

// export default QueryScreen;


// import React, { useState } from 'react';
// import Navbar from '../Navbar/Navbar';
// import { filterStocks } from '../../utils/filterStocks';
// import Results from '../Results/Results';
// import './QueryScreen.css';

// const QueryScreen = () => {
//     const [queryInput, setQueryInput] = useState('');
//     const [filteredResults, setFilteredResults] = useState(null);

//     // Handler for query text area change
//     const handleQueryInputChange = (e) => {
//         setQueryInput(e.target.value);
//     };

//     // Handler for the "Run Query" button click
//     const handleRunQuery = () => {
//         // Here, you would parse the `queryInput` to match the query fields.
//         // For simplicity, let's assume the query fields are predefined.

//         const query = {
//             marketCap: 500,
//             peRatio: 15,
//             roe: 22
//         };

//         const results = filterStocks(query);
//         setFilteredResults(results); // Set the filtered results to display
//     };

//     return (
//         <div className="query-screen">
//             <Navbar />
//             <div className="query-container">
//                 <h2>Create a Search Query</h2>
//                 <div className="query-form">
//                     <textarea 
//                         placeholder="Enter your query here..." 
//                         className="query-input" 
//                         value={queryInput} 
//                         onChange={handleQueryInputChange}
//                     ></textarea>
//                     <div className="query-options">
//                         <label>
//                             <input type="checkbox" /> Only companies with Sep 2024 results
//                         </label>
//                     </div>
//                     <button className="run-query-button" onClick={handleRunQuery}>RUN THIS QUERY</button>
//                 </div>
//                 <div className="custom-query-example">
//                     <h3>Custom query example</h3>
//                     <p>Market capitalization &gt; 500 AND</p>
//                     <p>Price to earning &lt; 15 AND</p>
//                     <p>Return on capital employed &gt; 22%</p>
//                 </div>
//                 <button className="show-all-ratios-button">SHOW ALL RATIOS</button>
//                 <a href="#" className="go-back-link">&larr; Go Back</a>
                
//                 {/* Display the results if any */}
//                 {filteredResults && <Results results={filteredResults} />}
//             </div>
//         </div>
//     );
// };

// export default QueryScreen;


// src/components/QueryScreen.js
import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { filterStocks } from '../../utils/filterStocks';
import Results from '../Results/Results';
import './QueryScreen.css';

const QueryScreen = () => {
    const [queryText, setQueryText] = useState('');
    const [filteredStocks, setFilteredStocks] = useState([]);

    // Parse the query from the textarea into a structured query object
    const parseQuery = (query) => {
        const criteria = {};
        
        if (query.includes('Market capitalization >')) {
            const value = query.match(/Market capitalization > (\d+)/);
            criteria.marketCap = value ? parseFloat(value[1]) : undefined;
        }
        if (query.includes('Price to earning <')) {
            const value = query.match(/Price to earning < (\d+)/);
            criteria.peRatio = value ? parseFloat(value[1]) : undefined;
        }
        if (query.includes('Return on capital employed >')) {
            const value = query.match(/Return on capital employed > (\d+)/);
            criteria.roe = value ? parseFloat(value[1]) : undefined;
        }
        
        return criteria;
    };

    // Handle the "RUN THIS QUERY" button click
    const handleRunQuery = () => {
        const queryObject = parseQuery(queryText);
        const results = filterStocks(queryObject);
        setFilteredStocks(results);
    };

    return (
        <div className="query-screen">
            <Navbar />
            <div className="query-container">
                <h2>Create a Search Query</h2>
                <div className="query-form">
                    <textarea
                        placeholder="Enter your query here..."
                        className="query-input"
                        value={queryText}
                        onChange={(e) => setQueryText(e.target.value)}
                    ></textarea>
                    <div className="query-options">
                        <label>
                            <input type="checkbox" /> Only companies with Sep 2024 results
                        </label>
                    </div>
                    <button className="run-query-button" onClick={handleRunQuery}>RUN THIS QUERY</button>
                </div>
                <div className="custom-query-example">
                    <h3>Custom query example</h3>
                    <p>Market capitalization &lt; 500 AND</p>
                    <p>Price to earning &lt; 15 AND</p>
                    <p>Return on capital employed &gt; 22%</p>
                </div>
                <button className="show-all-ratios-button">SHOW ALL RATIOS</button>
                <a href="#" className="go-back-link">&larr; Go Back</a>
            </div>
            <Results stocks={filteredStocks} />
        </div>
    );
};

export default QueryScreen;
