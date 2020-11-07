import React from 'react';
import {mainPropTypes} from '../../propTypes/propTypes.jsx';
import {Link} from 'react-router-dom';
import Map from '../map/map.jsx';
import mapConfig from '../map/config.js';
import CardListContainer from '../card-list/card-list-container.jsx';
import PlacesSortForm from '../places-sort-form/places-sort-form.jsx';
import CitiesList from '../cities-list/cities-list.jsx';
import {connect} from 'react-redux';
import {SortTypeFunction} from '../places-sort-option/sort-type.js';
import withSortOption from '../../hocs/with-sort-option.jsx';


// class Main extends PureComponent {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isSortListOpen: false,
//       currentSort: `DEFAULT`,
//       sortValue: `Popular`
//     };

//     this.reverseState = this.reverseState.bind(this);
//     this.handlePageClick = this.handlePageClick.bind(this);
//     this.getSortOption = this.getSortOption.bind(this);
//     this.resetState = this.resetState.bind(this);
//   }

//   reverseState() {
//     this.setState(({isSortListOpen}) => ({isSortListOpen: !isSortListOpen}));
//   }

//   resetState() {
//     this.setState({currentSort: `DEFAULT`, sortValue: `Popular`});
//   }

//   getSortOption(name, value) {
//     this.setState({currentSort: name, sortValue: value});
//   }

//   handlePageClick(evt) {
//     if (this.state.isSortListOpen && (evt.currentTarget.className === `page page--gray page--main`)) {
//       this.reverseState();
//     }
//   }

//   render() {


//     const currentSort = this.state.currentSort;

//     const {location, match, offersList, cityName} = this.props;
//     const {defaultCityCoordinats, ...config} = mapConfig;
//     const offersBySelectedCities = offersList.filter((offer) => offer.city === cityName)
//       .slice()
//       .sort(SortTypeFunction[currentSort]);

//     return (
//       <div className="page page--gray page--main" onClick={this.handlePageClick}>
//         <div className="page page--gray page--main">
//           <header className="header">
//             <div className="container">
//               <div className="header__wrapper">
//                 <div className="header__left">
//                   <a className="header__logo-link header__logo-link--active">
//                     <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
//                   </a>
//                 </div>
//                 <nav className="header__nav">
//                   <ul className="header__nav-list">
//                     <li className="header__nav-item user">
//                       <Link to="/favorites" className="header__nav-link header__nav-link--profile">
//                         <div className="header__avatar-wrapper user__avatar-wrapper">
//                         </div>
//                         <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
//                       </Link>
//                     </li>
//                   </ul>
//                 </nav>
//               </div>
//             </div>
//           </header>

//           <main className="page__main page__main--index">
//             <h1 className="visually-hidden">Cities</h1>
//             <div className="tabs">
//               <section className="locations container">
//                 <ul className="locations__list tabs__list">
//                   <CitiesList resetState={this.resetState}/>
//                 </ul>
//               </section>
//             </div>
//             <div className="cities">
//               <div className="cities__places-container container">
//                 <section className="cities__places places">
//                   <h2 className="visually-hidden">Places</h2>
//                   <b className="places__found">{offersBySelectedCities.length} places to stay in {cityName}</b>
//                   <PlacesSortForm state={this.state} reverseState={this.reverseState} getSortOption={this.getSortOption}/>
//                   <CardListContainer offers={offersBySelectedCities} location={location} match={match}/>
//                 </section>
//                 <div className="cities__right-section">
//                   <section className="cities__map map">
//                     <Map defaultCity={defaultCityCoordinats} config={config} offers={offersBySelectedCities}/>
//                   </section>
//                 </div>
//               </div>
//             </div>
//           </main>
//         </div>
//       </div>
//     );

//   }
// }

const Main = (props) => {


  const {location, match, offersList, cityName, state, handlePageClick, resetState, reverseState, getSortOption} = props;
  const {defaultCityCoordinats, ...config} = mapConfig;
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
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offersBySelectedCities.length} places to stay in {cityName}</b>
                <PlacesSortForm state={state} reverseState={reverseState} getSortOption={getSortOption}/>
                <CardListContainer offers={offersBySelectedCities} location={location} match={match}/>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map defaultCity={defaultCityCoordinats} config={config} offers={offersBySelectedCities}/>
                </section>
              </div>
            </div>
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

