import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

App.propTypes = {
  amountPlaces: PropTypes.number.isRequired
};

const App = ({amountPlaces}) => {
  return <Main amountPlaces={amountPlaces} />;
};

export default App;
