import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  const {data, handler} = props;
  return (
    <article className="cities__place-card place-card">
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src="img/room.jpg" width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{data.price.value}</b>
            <span className="place-card__price-text">&#47;&nbsp;{data.price.period}</span>
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
            <span style={data.rating}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{data.name}</a>
        </h2>
        <p className="place-card__type">{data.features.type}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    mark: PropTypes.bool,
    rating: PropTypes.objectOf(PropTypes.string),
    price: PropTypes.shape({
      value: PropTypes.string,
      period: PropTypes.string
    }),
    img: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    features: PropTypes.shape({
      type: PropTypes.string,
      bedrooms: PropTypes.string,
      adult: PropTypes.string,
    }),
    advantages: PropTypes.arrayOf(PropTypes.string),
    host: PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
    }),
    comments: PropTypes.shape({
      user: PropTypes.string,
      userAvatar: PropTypes.string,
      description: PropTypes.string
    })
  }),
  handler: PropTypes.function
};
