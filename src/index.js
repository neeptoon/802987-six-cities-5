import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {mockOffers} from './mocks/offers.js';

const amountPlaces = 512;

ReactDOM.render(<App amountPlaces={amountPlaces} mockOffers={mockOffers}/>, document.querySelector(`#root`));
