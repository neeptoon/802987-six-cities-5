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
    const {city, isActive} = this.props;
    const generalClassName = `locations__item-link tabs__item`;
    const activeClassName = `locations__item-link tabs__item tabs__item--active`;
    return (

      <li className="locations__item" onClick={this.handleCityClick}>
        <a className={isActive ? activeClassName : generalClassName} href="#">
          <span>{city}</span>
        </a>
      </li>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  offersList: state.offersList,
  isActive: state.cityName === ownProps.city,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(value) {
    dispatch(ActionCreator.changeCity(value));
  }

});

City.propTypes = cityPropTypes;

export {City};
export default connect(mapStateToProps, mapDispatchToProps)(City);
