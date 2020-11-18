import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {getRatingStyle} from '../../utils.js';

export class Card extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offer, handleCardOver, handleCardOut, articleClassName, imageClassName, imageStyle} = this.props;
    const activeButton = `place-card__bookmark-button  button place-card__bookmark-button--active`;
    const disableButton = `place-card__bookmark-button button`;


    return (
      <article className={`${articleClassName} place-card`} id={offer.id} onMouseOver={handleCardOver} onMouseOut={handleCardOut}>
        {offer.is_premium &&
          <div className='place-card__mark'>
            <span>Premium</span>
          </div>}

        <div className={`${imageClassName} place-card__image-wrapper`}>
          <a href="#">
            <img className="place-card__image" src={offer.preview_image} style={imageStyle} alt="Place image" />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className={offer.is_favorite ? activeButton : disableButton} type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={getRatingStyle(offer.rating)}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
          </h2>
          <p className="place-card__type">{offer.type}</p>
        </div>
      </article>
    );
  }
}

Card.propTypes = {
  offer: PropTypes.object,
  handleCardOver: PropTypes.func,
  handleCardOut: PropTypes.func,
  articleClassName: PropTypes.string,
  imageClassName: PropTypes.string,
  imageStyle: PropTypes.object
};
