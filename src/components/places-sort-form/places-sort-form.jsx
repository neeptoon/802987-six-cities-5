import React, {PureComponent} from 'react';
import {placesSortFormPropTypes} from '../../propTypes/propTypes';
import PlacesSortOption from '../places-sort-option/places-sort-option';

class PlacesSortForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentSort: `Popular`
    };

    this.handleFormClick = this.handleFormClick.bind(this);
    this.getSortOption = this.getSortOption.bind(this);
  }

  handleFormClick(evt) {
    const {reverseState} = this.props;

    if ((evt.target.className !== `places__sorting-type`) && (evt.target.className.animVal !== `places__sorting-arrow`)) {
      return;
    }
    reverseState();
  }

  getSortOption(option) {
    this.setState({currentSort: option});
  }


  render() {

    const {sortListState} = this.props;

    return (
      <form className="places__sorting" action="#" method="get" onClick={this.handleFormClick}>
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0">
          {this.state.currentSort}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <PlacesSortOption sortListState={sortListState} getSortOption={this.getSortOption}/>
      </form>
    );
  }
}

PlacesSortForm.propTypes = placesSortFormPropTypes;

export default PlacesSortForm;
