import React, {PureComponent} from 'react';

const withSortOption = (Component) => {
  return class WithSortOption extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isSortListOpen: false,
        currentSort: `DEFAULT`,
        sortValue: `Popular`
      };

      this.reverseState = this.reverseState.bind(this);
      this.handlePageClick = this.handlePageClick.bind(this);
      this.getSortOption = this.getSortOption.bind(this);
      this.resetState = this.resetState.bind(this);
    }

    reverseState() {
      this.setState(({isSortListOpen}) => ({isSortListOpen: !isSortListOpen}));
    }

    resetState() {
      this.setState({currentSort: `DEFAULT`, sortValue: `Popular`});
    }

    getSortOption(name, value) {
      this.setState({currentSort: name, sortValue: value});
    }

    handlePageClick(evt) {
      if (this.state.isSortListOpen && (evt.currentTarget.className === `page page--gray page--main`)) {
        this.reverseState();
      }
    }

    render() {
      return (
        <Component {...this.props}
          state={this.state}
          reverseState={this.reverseState}
          resetState={this.resetState}
          getSortOption={this.getSortOption}
          handlePageClick={this.handlePageClick}
        />
      );
    }
  };

};

export default withSortOption;
