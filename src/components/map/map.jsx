import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {connect} from 'react-redux';

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.config = this.props.config;
    this.map = null;
    this.icon = leaflet.icon({
      iconUrl: this.config.iconUrl,
      iconSize: this.config.iconSize
    });
    this.activeIcon = leaflet.icon({
      iconUrl: this.config.activeIconUrl,
      iconSize: this.config.iconSize
    });
    this.offers = this.props.offers;
    this.defaultCity = this.props.defaultCity;
  }

  showPinToMap() {
    const DEFAULT_CITY = `Amsterdam`;
    this.offers.filter((offer) => offer.city === DEFAULT_CITY)
    .forEach((offer) => {
      const offerCoords = offer.coordinates;
      leaflet
      .marker(offerCoords, offer.id === this.props.activeCardId ? {icon: this.activeIcon} : {icon: this.icon})
      .addTo(this.map);
    });
  }

  componentDidUpdate() {
    this.showPinToMap();
  }

  componentDidMount() {
    const zoom = this.config.defaultZoom;

    this.map = leaflet.map(`map`, {
      center: this.defaultCity,
      zoom,
      zoomControl: false,
      marker: true
    });

    this.map.setView(this.defaultCity, zoom);

    leaflet
      .tileLayer(this.config.urlTemplate, this.config.urlOptions)
      .addTo(this.map);

    this.showPinToMap();
  }

  render() {
    return (
      <div id="map" style={this.config.style}>

      </div>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.array.isRequired,
  defaultCity: PropTypes.arrayOf(PropTypes.number).isRequired,
  config: PropTypes.object.isRequired,
  activeCardId: PropTypes.number
};

const mapStateToProps = (state) => ({
  activeCardId: state.activeCardId,
});


export {Map};
export default connect(mapStateToProps)(Map);


