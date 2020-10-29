import React from 'react';
import {mainPropTypes} from '../../propTypes/propTypes.jsx';
import {Link} from 'react-router-dom';
import Map from '../map/map.jsx';
import mapConfig from '../map/config.js';
import CardListContainer from '../card-list/card-list-container.jsx';
import PlacesSortForm from '../places-sort-form/places-sort-form.jsx';
import {CitiesList} from '../cities-list/cities-list.jsx';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action.js';

const Main = (props) => {


  const {location, match, offersList, cityName, changeCity} = props;
  const {defaultCityCoordinats, ...config} = mapConfig;
  const offersBySelectedCities = offersList.filter((offer) => offer.city === cityName);

  return (
    <div className="page page--gray page--main">
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link to="/favorites" className="header__nav-link header__nav-link--profile">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <ul className="locations__list tabs__list">
                <CitiesList offers={offersList} changeCity={changeCity}/>
              </ul>
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offersBySelectedCities.length} places to stay in {cityName}</b>
                <PlacesSortForm />
                <CardListContainer offers={offersBySelectedCities} location={location} match={match}/>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map defaultCity={defaultCityCoordinats} config={config} offers={offersBySelectedCities}/>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

Main.propTypes = mainPropTypes;

const mapStateToProps = (state) => ({
  cityName: state.cityName,
  offersList: state.offersList
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(value) {
    dispatch(ActionCreator.changeCity(value));
  }

});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);

