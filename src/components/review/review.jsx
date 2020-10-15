import React from 'react';
import {reviewPropTypes} from '../../propTypes/propTypes';


const Review = ({comments}) => {
  return (
    comments.map((comment, index) => {
      const {description, user, userAvatar, rating} = comment;
      return (
        <li key={index.toString()} className="reviews__item">
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img className="reviews__avatar user__avatar" src={userAvatar} width="54" height="54" alt="Reviews avatar" />
            </div>
            <span className="reviews__user-name">
              {user}
            </span>
          </div>
          <div className="reviews__info">
            <div className="reviews__rating rating">
              <div className="reviews__stars rating__stars">
                <span style={rating}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <p className="reviews__text">
              {description}
            </p>
            <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
          </div>
        </li>
      );
    })
  );
};

Review.propTypes = reviewPropTypes;

export default Review;
