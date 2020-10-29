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
        <Route exact path="/" render={(renderProps) => <Main {...renderProps}/>}/>
        <Route exact path="/favorites" render={(renderProps) => <Favorites {...renderProps}/>} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/offer/:id?" render={(renderProps) => <Room {...renderProps}/>}/>
      </Switch>
    </Router>
  );
};

export default App;
