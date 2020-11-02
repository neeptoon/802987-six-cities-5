import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

class Map extends PureComponent {

  componentDidMount() {
    const {offers, defaultCity, config} = this.props;

    const icon = leaflet.icon({
      iconUrl: config.iconUrl,
      iconSize: config.iconSize
    });

    const activeIcon = leaflet.icon({
      iconUrl: config.activeIconUrl,
      iconSize: config.iconSize
    });


    const zoom = config.defaultZoom;
    const map = leaflet.map(`map`, {
      center: defaultCity,
      zoom,
      zoomControl: false,
      marker: true
    });

    map.setView(defaultCity, zoom);

    leaflet
      .tileLayer(config.urlTemplate, config.urlOptions)
      .addTo(map);

    offers.filter((offer) => offer.city === `Amsterdam`)
      .forEach((offer) => {
        const offerCoords = offer.coordinates;
        leaflet
        .marker(offerCoords, {icon})
        .addTo(map);
      });
  }

  render() {
    const {config} = this.props;
    return (
      <div id="map" style={config.style}>

      </div>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.array.isRequired,
  defaultCity: PropTypes.arrayOf(PropTypes.number).isRequired,
  config: PropTypes.object.isRequired
};


export default Map;

