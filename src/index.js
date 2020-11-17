import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {createAPI} from "./services/api.js";
import rootReducer from "./store/reducers/root-reducer.js";
import thunk from "redux-thunk";
import {AuthorizationStatus} from './constants.js';
import {ActionCreator} from './store/action.js';
import {fetchOffersList} from './store/reducers/api-actions.js';
import {composeWithDevTools} from "redux-devtools-extension";


const api = createAPI(() => {
  store.dispatch(ActionCreator.setAuthorization(AuthorizationStatus.NO_AUTH));
});

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(fetchOffersList());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`));
