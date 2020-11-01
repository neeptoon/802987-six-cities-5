import React, {Component} from 'react';
import {placesSortOptionPropTypes} from '../../propTypes/propTypes';


class PlacesSortOption extends Component {
  constructor(props) {
    super(props);

    this.handleOptionClick = this.handleOptionClick.bind(this);
  }


  handleOptionClick(evt) {
    const {getSortOption} = this.props;
    getSortOption(evt.target.textContent);
  }

  render() {
    const options = [`Popular`, `Price: low to high`, `Price: high to low`, `Top rated first`];
    const closedClassName = `places__options places__options--custom`;
    const opendClassName = `places__options places__options--custom places__options--opened`;
    const {sortListState} = this.props;


    return (
      <ul className={sortListState.isSortListOpen ? opendClassName : closedClassName} onClick={this.handleOptionClick}>
        {options.map((option, index) => <li key={`${option}-${index.toString()}`} className="places__option" tabIndex="0">{option}</li>)}
      </ul>
    );
  }

}

PlacesSortOption.propTypes = placesSortOptionPropTypes;

export default PlacesSortOption;
