import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {cityPropTypes} from '../../propTypes/propTypes.jsx';
import {ActionCreator} from '../../store/action.js';
import {bindActionCreators} from 'redux';
import {getCityName, getOffersList} from '../../store/selectors.js';

class City extends PureComponent {

  constructor(props) {
    super(props);

    this.handleCityClick = this.handleCityClick.bind(this);
  }

  handleCityClick(evt) {
    const {changeCityName, resetState} = this.props;
    const currentCity = evt.currentTarget.textContent;
    changeCityName(currentCity);
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
  offersList: getOffersList(state),
  isActive: getCityName(state) === ownProps.city,
});

const mapDispatchToProps = (dispatch) => {
  return ({
    changeCityName: bindActionCreators(ActionCreator.changeCity, dispatch)
  });
};

City.propTypes = cityPropTypes;

export {City};
export default connect(mapStateToProps, mapDispatchToProps)(City);
