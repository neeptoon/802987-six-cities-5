import React from 'react';
import Main from '../main/main.jsx';
import Favorites from '../favorites/favorites.jsx';
import Room from '../room/room.jsx';
import Login from '../login/login.jsx';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/offer/:id?" component={Room}/>
      </Switch>
    </Router>
  );
};

export default App;
