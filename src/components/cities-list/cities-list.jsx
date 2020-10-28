import React, {PureComponent} from 'react';
import {cities} from '../../mocks/offers.js';
import {citiesListPropTypes} from '../../propTypes/propTypes.jsx';

export class CitiesList extends PureComponent {
  constructor(props) {
    super(props);

    this.handleCityClick = this.handleCityClick.bind(this);
  }

  handleCityClick(evt) {
    const {changeCity} = this.props;
    changeCity(evt.currentTarget.textContent);
  }

  render() {

    return (
      cities.map((city, index) =>
        <li key={`${city}-${index.toString()}`} className="locations__item" onClick={this.handleCityClick}>
          <a className="locations__item-link tabs__item" href="#">
            <span>{city}</span>
          </a>
        </li>
      )
    );
  }
}


CitiesList.propTypes = citiesListPropTypes;
