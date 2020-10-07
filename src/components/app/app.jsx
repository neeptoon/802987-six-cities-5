import React from 'react';
import Main from '../main/main.jsx';
import Favorites from '../favorites/favorites.jsx';
import Room from '../room/room.jsx';
import Login from '../login/login.jsx';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {mockOffers} from '../../mocks/offers.js';

const App = (props) => {
  console.log(mockOffers);

  const {amountPlaces} = props;

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(renderProps) => <Main {...renderProps} amountPlaces={amountPlaces}/>}/>
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/offer/:id?" component={Room} />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  amountPlaces: PropTypes.number.isRequired,
  mockOffers: PropTypes.array.isRequired,
};

export default App;
