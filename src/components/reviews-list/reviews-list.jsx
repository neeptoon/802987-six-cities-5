import React from 'react';
import Review from '../review/review.jsx';
import ReviewForm from '../review-form/review-form.jsx';
import {reviewPropTypes} from '../../propTypes/propTypes.jsx';


const ReviewsList = ({comments}) => {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__</ul>list">
        <Review comments={comments} />
      </ul>
      <ReviewForm />
    </section>
  );
};

ReviewsList.propTypes = reviewPropTypes;

export default ReviewsList;
