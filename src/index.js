import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./store/reducer";

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
