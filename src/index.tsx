import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
console.log(`
    until all my fingernails peel off my fingers 
    im holding on desperately
    everything i know revolves around you
    and the way you reflect in me
    the cracks in the pavement
    deeper than ancient ruins
    the second you say that
    you want me to stay
    i knew that you were the dream i had last night
    i was the boy who was standing there
    eyes wide open i never felt

    anything like what you've given to me i swear i've never felt
  `);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
