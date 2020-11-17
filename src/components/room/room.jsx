import React from 'react';
import {roomPropTypes} from '../../propTypes/propTypes';
import Image from '../image/image.jsx';
import Advantage from '../advantage/advantage.jsx';
import Host from '../host/host.jsx';
import ReviewsList from '../reviews-list/reviews-list.jsx';
import Map from '../map/map.jsx';
import mapConfig from '../map/config.js';
import CardListContainer from '../card-list/card-list-container.jsx';
import {connect} from 'react-redux';
import {getCityName, getOffersList} from '../../store/selectors';

const Room = ({match, offersList, location}) => {

  const currentId = +match.params.id;
  const currentOffer = offersList.find((offer) => {

    return offer.id === currentId;
  });

  const {name, ratingStyle, rating, price, images, features, advantages, host, comments} = currentOffer;
  const {defaultCityCoordinats, ...config} = mapConfig;
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              <Image src={images} />
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                <span>Premium</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {name}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={ratingStyle}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {features.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {features.bedrooms}
                </li>
                <li className="property__feature property__feature--adults">
                  {features.adult}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price.value}</b>
                <span className="property__price-text">&nbsp;{price.period}</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  <Advantage advantages={advantages} />
                </ul>
              </div>
              <Host hostInfo={host} />
              <ReviewsList comments={comments}/>
            </div>
          </div>
          <section className="property__map map">
            <Map defaultCity={defaultCityCoordinats} config={config} offers={offersList.filter((offer) => offer.id !== currentId)} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <CardListContainer location={location} offers={offersList} match={match}/>
          </section>
        </div>
      </main>
    </div>
  );
};


Room.propTypes = roomPropTypes;

const mapStateToProps = (state) => ({
  cityName: getCityName(state),
  offersList: getOffersList(state)
});

export {Room};
export default connect(mapStateToProps)(Room);
