import React, {PureComponent} from 'react';
import PlacesSortOption from '../places-sort-option/places-sort-option';

class PlacesSortForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpend: false
    };

    this.handleFormClick = this.handleFormClick.bind(this);
  }

  handleFormClick(evt) {
    if ((evt.target.className !== `places__sorting-type`) && (evt.target.className.animVal !== `places__sorting-arrow`)) {
      return;
    }
    this.reverseState();
  }

  reverseState() {
    this.setState((state) => ({isOpend: !state.isOpend}));
  }

  render() {

    return (
      <form className="places__sorting" action="#" method="get" onClick={this.handleFormClick}>
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0">
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <PlacesSortOption state={this.state}/>
      </form>
    );
  }
}

export default PlacesSortForm;
