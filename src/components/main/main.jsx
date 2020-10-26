import React, {PureComponent} from 'react';
import {mainPropTypes} from '../../propTypes/propTypes.jsx';
import {Link} from 'react-router-dom';
import Map from '../map/map.jsx';
import mapConfig from '../map/config.js';
import CardListContainer from '../card-list/card-list-container.jsx';
import PlacesSortForm from '../places-sort-form/places-sort-form.jsx';

class Main extends PureComponent {
  constructor(props) {
    super(props);
  }


  render() {
    const {mockOffers, location, match} = this.props;
    const {defaultCityCoordinats, ...config} = mapConfig;

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
                  <li className="locations__item">
                    <a className="locations__item-link tabs__item" href="#">
                      <span>Paris</span>
                    </a>
                  </li>
                  <li className="locations__item">
                    <a className="locations__item-link tabs__item" href="#">
                      <span>Cologne</span>
                    </a>
                  </li>
                  <li className="locations__item">
                    <a className="locations__item-link tabs__item" href="#">
                      <span>Brussels</span>
                    </a>
                  </li>
                  <li className="locations__item">
                    <a className="locations__item-link tabs__item tabs__item--active">
                      <span>Amsterdam</span>
                    </a>
                  </li>
                  <li className="locations__item">
                    <a className="locations__item-link tabs__item" href="#">
                      <span>Hamburg</span>
                    </a>
                  </li>
                  <li className="locations__item">
                    <a className="locations__item-link tabs__item" href="#">
                      <span>Dusseldorf</span>
                    </a>
                  </li>
                </ul>
              </section>
            </div>
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{mockOffers.length} places to stay in Amsterdam</b>
                  <PlacesSortForm />
                  <CardListContainer mockOffers={mockOffers} location={location} match={match}/>
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <Map defaultCity={defaultCityCoordinats} config={config} offers={mockOffers}/>
                  </section>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );

  }
}

Main.propTypes = mainPropTypes;

export default Main;

