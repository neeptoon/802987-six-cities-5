import React, {Component} from 'react';
import {placesSortOptionPropTypes} from '../../propTypes/propTypes';
import {SortType} from './sort-type.js';


class PlacesSortOption extends Component {
  constructor(props) {
    super(props);

    this.handleOptionClick = this.handleOptionClick.bind(this);
  }


  handleOptionClick(evt) {
    const {getSortOption} = this.props;
    getSortOption(evt.target.dataset.sortType, evt.target.textContent);
  }

  render() {
    const closedClassName = `places__options places__options--custom`;
    const opendClassName = `places__options places__options--custom places__options--opened`;
    const {state} = this.props;


    return (
      <ul className={state.isSortListOpen ? opendClassName : closedClassName} onClick={this.handleOptionClick}>
        {SortType.map((option, index) => <li key={`${option}-${index.toString()}`} className="places__option" tabIndex="0" data-sort-type={`${option.name}`}>{option.value}</li>)}
      </ul>
    );
  }
}

PlacesSortOption.propTypes = placesSortOptionPropTypes;

export default PlacesSortOption;
