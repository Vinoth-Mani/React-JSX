// 1) Import react and react-dom libraries

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// 2) Get a reference to the root div in index.html


const rootEle = document.getElementById('root');

// 3) Tell react to take control of the root div and render the App component

const root = ReactDOM.createRoot(rootEle);
// 4) Create the App component


// 5) Take the App component and show it on the screen

root.render(<App />);

