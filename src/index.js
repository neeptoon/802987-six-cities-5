import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import createAPI from "./services/api.js";
import {reducer} from "./store/reducer";
import thunk from "redux-thunk";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);


const amountPlaces = 512;

ReactDOM.render(
    <Provider store={store}>
      <App amountPlaces={amountPlaces} />
    </Provider>,
    document.querySelector(`#root`));
