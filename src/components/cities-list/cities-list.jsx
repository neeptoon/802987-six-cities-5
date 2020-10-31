import React, {Component} from 'react';
import {cities} from '../../mocks/offers.js';
import {citiesListPropTypes} from '../../propTypes/propTypes.jsx';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action.js';

class CitiesList extends Component {
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
    const {cityName} = this.props;
    const generalClassName = `locations__item-link tabs__item`;
    const activeClassName = `locations__item-link tabs__item tabs__item--active`;

    return (

      cities.map((city, index) =>
        <li key={`${city}-${index.toString()}`} className="locations__item" onClick={this.handleCityClick}>
          <a className={city === cityName ? activeClassName : generalClassName} href="#">
            <span>{city}</span>
          </a>
        </li>
      )
    );
  }
}

const mapStateToProps = (state) => ({
  cityName: state.cityName,
  offersList: state.offersList
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(value) {
    dispatch(ActionCreator.changeCity(value));
  }

});

CitiesList.propTypes = citiesListPropTypes;

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
