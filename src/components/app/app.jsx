import React from 'react';
import Main from '../main/main.jsx';
import Favorites from '../favorites/favorites.jsx';
import Room from '../room/room.jsx';
import Login from '../login/login.jsx';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {appPropTypes} from '../../propTypes/propTypes.jsx';

const App = (props) => {

  const {mockOffers} = props;

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(renderProps) => <Main {...renderProps} mockOffers={mockOffers}/>}/>
        <Route exact path="/favorites" render={(renderProps) => <Favorites {...renderProps} currentOffer = {mockOffers[0]}/>} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/offer/:id?" render={(renderProps) => <Room {...renderProps} currentOffer={mockOffers[0]} />}/>
      </Switch>
    </Router>
  );
};

App.propTypes = appPropTypes;

export default App;
