import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const amountPlaces = 512;

ReactDOM.render(<App amountPlaces={amountPlaces} />, document.querySelector(`#root`));
