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
    const currentCity = evt.currentTarget.textContent;
    changeCity(currentCity);
  }

  render() {
    const {chekedCity} = this.props;
    const generalClassName = `locations__item-link tabs__item`;
    const activeClassName = `locations__item-link tabs__item tabs__item--active`;

    return (

      cities.map((city, index) =>
        <li key={`${city}-${index.toString()}`} className="locations__item" onClick={this.handleCityClick}>
          <a className={city === chekedCity ? activeClassName : generalClassName} href="#">
            <span>{city}</span>
          </a>
        </li>
      )
    );
  }
}


CitiesList.propTypes = citiesListPropTypes;
