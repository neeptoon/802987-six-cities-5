import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {cityPropTypes} from '../../propTypes/propTypes.jsx';
import {ActionCreator} from '../../store/action.js';

class City extends PureComponent {

  constructor(props) {
    super(props);

    this.handleCityClick = this.handleCityClick.bind(this);
  }

  handleCityClick(evt) {
    const {changeCity, resetState} = this.props;
    const currentCity = evt.currentTarget.textContent;
    changeCity(currentCity);
    resetState();
  }


  render() {
    const {city, index, cityName} = this.props;
    const generalClassName = `locations__item-link tabs__item`;
    const activeClassName = `locations__item-link tabs__item tabs__item--active`;
    return (

      <li key={`${city}-${index.toString()}`} className="locations__item" onClick={this.handleCityClick}>
        <a className={city === cityName ? activeClassName : generalClassName} href="#">
          <span>{city}</span>
        </a>
      </li>
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

City.propTypes = cityPropTypes;

export {City};
export default connect(mapStateToProps, mapDispatchToProps)(City);
