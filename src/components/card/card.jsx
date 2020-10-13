import React, {PureComponent} from 'react';
import {Premium} from '../premium/premium.jsx';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export class Card extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offer, handleCardOver, handleCardOut} = this.props;

    return (
      <article className="cities__place-card place-card" id={offer.id} onMouseOver={handleCardOver} onMouseOut={handleCardOut}>
        <Premium isPremium={offer.mark} />
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={offer.img} width="260" height="200" alt="Place image" />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.price.value}</b>
              <span className="place-card__price-text">&#47;&nbsp;{offer.price.period}</span>
            </div>
            <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={offer.ratingStyle}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to={`/offer/${offer.id}`}>{offer.name}</Link>
          </h2>
          <p className="place-card__type">{offer.features.type}</p>
        </div>
      </article>
    );
  }
}

Card.propTypes = {
  offer: PropTypes.object,
  handleCardOver: PropTypes.func,
  handleCardOut: PropTypes.func,
};
