import React from 'react';
import {mainPropTypes} from '../../propTypes/propTypes.jsx';
import {Link} from 'react-router-dom';
import CitiesList from '../cities-list/cities-list.jsx';
import {connect} from 'react-redux';
import {SortTypeFunction} from '../places-sort-option/sort-type.js';
import withSortOption from '../../hocs/with-sort-option.jsx';
import FullOffersScreen from '../full-offers-screen/full-offers-screen.jsx';
import EmptyOffersScreen from '../empty-offers-screen/empty-offers-screen.jsx';

import CardListContainer from '../card-list/card-list-container.jsx';
import PlacesSortForm from '../places-sort-form/places-sort-form.jsx';


const Main = (props) => {


  const {location, match, offersList, cityName, state, handlePageClick, resetState, reverseState, getSortOption} = props;
  const offersBySelectedCities = offersList.filter((offer) => offer.city === cityName)
      .slice()
      .sort(SortTypeFunction[state.currentSort]);

  return (
    <div className="page page--gray page--main" onClick={handlePageClick}>
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
                <CitiesList resetState={resetState}/>
              </ul>
            </section>
          </div>
          <div className="cities">
            {offersBySelectedCities.length ?
              <FullOffersScreen
                placesSortForm ={<PlacesSortForm state={state} reverseState={reverseState} getSortOption={getSortOption} />}
                cardListContainer={<CardListContainer offers={offersBySelectedCities} location={location} match={match}/>}
                offersBySelectedCities={offersBySelectedCities}
                cityName={cityName}/> :
              <EmptyOffersScreen cityName={cityName}/>}
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

export {Main};
export default connect(mapStateToProps)(withSortOption(Main));

