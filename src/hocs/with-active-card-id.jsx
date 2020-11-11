import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withActiveCardId = (Component) => {
  class WithActiveCardId extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeCardId: null
      };

      this.handleCardOver = this.handleCardOver.bind(this);
      this.handleCardOut = this.handleCardOut.bind(this);

    }

    handleCardOver(evt) {
      const currentID = evt.currentTarget.id;

      this.setState((state, {offers}) => {
        return {
          activeCardId: offers.find((offer) => offer.id.toString() === currentID).id
        };
      });
    }

    handleCardOut() {
      this.setState({activeCardId: null});
    }

    render() {
      return (
        <Component {...this.props}
          state={this.state}
          handleCardOut={this.handleCardOut}
          handleCardOver={this.handleCardOver}
        />
      );
    }
  }
  WithActiveCardId.propTypes = {
    offers: PropTypes.array,
    activeCardId: PropTypes.func,
  };

  return WithActiveCardId;
};

export default withActiveCardId;

