import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';


const App = ({amountPlaces}) => {
  return <Main amountPlaces={amountPlaces} />;
};

App.propTypes = {
  amountPlaces: PropTypes.number
};

export default App;
